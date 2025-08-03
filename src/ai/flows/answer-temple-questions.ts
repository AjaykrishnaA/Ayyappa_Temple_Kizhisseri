'use server';

/**
 * @fileOverview An AI assistant for answering devotee questions about the temple.
 *
 * - answerTempleQuestions - A function that answers questions about the temple.
 * - AnswerTempleQuestionsInput - The input type for the answerTempleQuestions function.
 * - AnswerTempleQuestionsOutput - The return type for the answerTempleQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerTempleQuestionsInputSchema = z.object({
  question: z.string().describe('The question from the devotee about the temple.'),
});
export type AnswerTempleQuestionsInput = z.infer<typeof AnswerTempleQuestionsInputSchema>;

const AnswerTempleQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the devotee question about the temple.'),
});
export type AnswerTempleQuestionsOutput = z.infer<typeof AnswerTempleQuestionsOutputSchema>;

export async function answerTempleQuestions(input: AnswerTempleQuestionsInput): Promise<AnswerTempleQuestionsOutput> {
  return answerTempleQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerTempleQuestionsPrompt',
  input: {schema: AnswerTempleQuestionsInputSchema},
  output: {schema: AnswerTempleQuestionsOutputSchema},
  prompt: `You are a knowledgeable guide about the Ayyappan Temple in Kizhisseri.\n\n  A devotee has the following question:\n  {{question}}\n\n  Provide a concise and informative answer. Focus on temple history, rituals, or spiritual significance.\n  If the question is not relevant to the temple, politely decline to answer.\n  `,
});

const answerTempleQuestionsFlow = ai.defineFlow(
  {
    name: 'answerTempleQuestionsFlow',
    inputSchema: AnswerTempleQuestionsInputSchema,
    outputSchema: AnswerTempleQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
