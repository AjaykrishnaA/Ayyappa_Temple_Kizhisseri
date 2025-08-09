import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AiAssistant } from "@/components/ai-assistant";
import { AppHeader } from "@/components/layout/header";
import { AppFooter } from "@/components/layout/footer";
import { Landmark, CalendarDays, MapPin, GalleryHorizontal, BrainCircuit, Users, BookOpen, Code } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const galleryImages = [
    { src: "/images/gallery/temple-front-entrance.jpg", alt: "Temple front entrance", hint: "temple architecture" },
    { src: "/images/gallery/temple-front-entrance-old.jpg", alt: "Temple front entrance (historical)", hint: "temple history" },
    { src: "/images/gallery/temple-main-sanctum.jpg", alt: "Temple main sanctum", hint: "temple main sanctum" },
    { src: "/images/gallery/temple-interior.jpg", alt: "Temple interior", hint: "temple interior" },
    { src: "/images/gallery/temple-sanctum-sculptures.jpg", alt: "Temple sanctum sculptures", hint: "temple art" },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <AppHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
          <Image
            src="/images/temple/temple-front-entrance.jpg"
            alt="Kizhisseri Sri Ayyappa Temple front entrance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 container px-4">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
              Welcome to Kizhisseri Sri Ayyappa Temple
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-body drop-shadow-md">
              A serene abode of Lord Ayyappan, fostering spirituality and devotion.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="#about">Explore the Temple</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">About The Temple</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Discover the divine history and spiritual significance of this sacred place.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><Users /> The Deity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground">The main deity of this temple is Lord Ayyappan, the son of Hari (Vishnu) and Hara (Shiva). He is revered as the epitome of dharma, truth, and righteousness and is often depicted in a yogic posture, symbolizing his control over the senses and his ascetic nature.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><Landmark /> History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground">The Kizhisseri Sri Ayyappa Temple has a rich history that dates back several centuries. It has been a spiritual center for the local community, witnessing generations of devotees who have come to seek blessings and solace. The temple's architecture reflects traditional Kerala style.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><BookOpen /> Significance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground">This temple holds immense spiritual significance, especially during the Mandala-Makaravilakku season. It serves as a focal point for Ayyappa devotees to observe vratham (austerities) and participate in communal bhajans and pujas before undertaking the pilgrimage to Sabarimala.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Thanthri Section */}
 <section id="thanthri" className="py-16 md:py-24">
 <div className="container px-4">
 <div className="text-center">
 <h2 className="font-headline text-3xl md:text-4xl font-bold">Esteemed Kshethram Thanthri</h2>
 <Card className="max-w-lg mx-auto mt-8 text-center shadow-lg">
 <CardContent className="p-8 flex flex-col items-center gap-6">
 <Avatar className="w-32 h-40 border-4 border-primary rounded-md">
 <AvatarImage src="/images/avatars/madhavan_namboodiri.png" alt="Brahmasree Madhavan Namboodiri" />
 <AvatarFallback>MN</AvatarFallback>
 </Avatar>
 <div className="text-center">
 <h3 className="text-2xl font-bold font-headline">Brahmasree Madhavan Namboodirippad</h3>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

        {/* Rituals Section */}
        <section id="rituals" className="py-16 md:py-24 bg-secondary/30">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Rituals &amp; Festivals</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Experience the divine ceremonies that form the heart of our temple life.</p>
            </div>
            <Tabs defaultValue="daily" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="daily">Daily Pujas</TabsTrigger>
                <TabsTrigger value="special">Special Pujas</TabsTrigger>
                <TabsTrigger value="festivals">Festivals</TabsTrigger>
              </TabsList>
              <TabsContent value="daily" className="mt-6">
                <Card>
                  <CardContent className="p-6 font-body text-center space-y-2 text-muted-foreground">
                    <p><span className="font-semibold text-foreground">5:00 AM:</span> Nirmalyam</p>
                    <p><span className="font-semibold text-foreground">6:00 AM:</span> Usha Pooja</p>
                    <p><span className="font-semibold text-foreground">11:00 AM:</span> Ucha Pooja</p>
                    <p><span className="font-semibold text-foreground">6:30 PM:</span> Deeparadhana</p>
                    <p><span className="font-semibold text-foreground">8:00 PM:</span> Athazha Pooja</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="special" className="mt-6">
                <Card>
                  <CardContent className="p-6 font-body text-center space-y-2 text-muted-foreground">
                    <p>Neyyabhishekam</p>
                    <p>Ganapathi Homam</p>
                    <p>Bhagavathy Seva</p>
                    <p>Special offerings can be arranged upon request.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="festivals" className="mt-6">
                <Card>
                  <CardContent className="p-6 font-body text-center space-y-2 text-muted-foreground">
                    <p className="font-semibold text-foreground">Mandala Pooja (Vrischikam - Dhanu)</p>
                    <p className="font-semibold text-foreground">Makaravilakku</p>
                    <p className="font-semibold text-foreground">Temple Anniversary (Utsavam)</p>
                    <p className="font-semibold text-foreground">Vishu</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Gallery</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">A glimpse into the divine atmosphere of the temple.</p>
            </div>
            <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="p-2">
                        <div className="aspect-video relative">
                           <Image src={image.src} alt={image.alt} data-ai-hint={image.hint} fill className="rounded-md object-cover"/>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background/50 hover:bg-background/80" />
              <CarouselNext className="right-4 bg-background/50 hover:bg-background/80" />
            </Carousel>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section id="ai-assistant" className="py-16 md:py-24 bg-secondary/30">
          <div className="container px-4">
             <AiAssistant />
          </div>
        </section>
        
        {/* Location Section */}
        <section id="location" className="py-16 md:py-24">
          <div className="container px-4">
             <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Visit Us</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Find your way to the divine presence of Lord Ayyappan.</p>
              <Card className="max-w-md mx-auto mt-8 text-left shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><MapPin /> Temple Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-body">
                    Kizhisseri Sri Ayyappa Temple,<br />
                    Kizhisseri, Kuzhimanna P.O.<br />
                    Malappuram District,<br />
                    Kerala, India<br />
                    673641
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="https://maps.app.goo.gl/EMgqPQSZVcYmGRe37" target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Developer Section */}
        <section id="developer" className="py-16 md:py-24 bg-secondary/30">
          <div className="container px-4">
             <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Developed &amp; Maintained By</h2>
              <Card className="max-w-lg mx-auto mt-8 text-center shadow-lg">
                <CardContent className="p-8 flex flex-col items-center gap-6">
                  <Avatar className="w-32 h-32 border-4 border-primary">
                    <AvatarImage src="/images/avatars/ajay-krishna-a.jpg" alt="Ajay krishna A" />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                     <h3 className="text-2xl font-bold font-headline">Ajay Krishna Atholi</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <AppFooter />
    </div>
  );
}
