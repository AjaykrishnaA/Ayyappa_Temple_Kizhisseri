"use client";

import { useState, useRef, useEffect } from "react";
import { answerTempleQuestions } from "@/ai/flows/answer-temple-questions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Bot, User, Send } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";

type Message = {
  role: 'user' | 'bot';
  content: string;
};

export function AiAssistant() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation, isLoading]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setConversation(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');

    try {
      const response = await answerTempleQuestions({ question: input });
      const botMessage: Message = { role: 'bot', content: response.answer };
      setConversation(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      const errorMessage: Message = { role: 'bot', content: "Sorry, I encountered an error. Please try again later." };
      setConversation(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl border-2 border-accent/20">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-accent" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold">AI Assistant</h2>
        </div>
        <CardDescription className="font-body">
          Ask me anything about the temple's history, rituals, or spiritual significance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] overflow-y-auto p-4 border rounded-lg mb-4 bg-background/50 space-y-6" ref={scrollRef}>
          {conversation.length === 0 && !isLoading && (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <p className="font-body">Ask a question to start the conversation.</p>
            </div>
          )}
          {conversation.map((msg, index) => (
            <div key={index} className={cn("flex items-start gap-3 w-full", msg.role === 'user' ? 'justify-end' : 'justify-start')}>
              {msg.role === 'bot' && (
                <Avatar className="border-2 border-accent">
                  <AvatarFallback className="bg-accent/20 text-accent"><Bot /></AvatarFallback>
                </Avatar>
              )}
              <div className={cn("max-w-[80%] rounded-lg p-3", msg.role === 'user' ? 'bg-primary/90 text-primary-foreground' : 'bg-card')}>
                <p className="font-body text-sm leading-relaxed">{msg.content}</p>
              </div>
              {msg.role === 'user' && (
                 <Avatar className="border-2 border-primary">
                  <AvatarFallback className="bg-primary/20 text-primary"><User /></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3 justify-start">
               <Avatar className="border-2 border-accent">
                  <AvatarFallback className="bg-accent/20 text-accent"><Bot /></AvatarFallback>
                </Avatar>
              <div className="max-w-[80%] rounded-lg p-3 bg-card flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse [animation-delay:0.2s]" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., What is the significance of the 18 steps?"
            disabled={isLoading}
            className="flex-grow font-body"
            aria-label="Ask the AI assistant a question"
          />
          <Button type="submit" disabled={isLoading || !input.trim()} size="icon" aria-label="Send question">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
