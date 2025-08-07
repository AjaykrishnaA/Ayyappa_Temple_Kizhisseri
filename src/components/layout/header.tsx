import Link from 'next/link';
import { Landmark, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function AppHeader() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#rituals', label: 'Rituals' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#ai-assistant', label: 'AI Assistant' },
    { href: '#location', label: 'Location' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Landmark className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline hidden sm:inline-block">
            Kizhisseri Sri Ayyappa Temple
          </span>
           <span className="font-bold font-headline sm:hidden">
            K. A. Temple
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium font-body">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="#contact">Donate Now</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium mt-10 font-body">
                  <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4 font-headline">
                    <Landmark className="h-6 w-6 text-primary" />
                    <span>K. A. Temple</span>
                  </Link>
                  {navLinks.map(link => (
                     <SheetClose asChild key={link.href}>
                       <Link href={link.href} className="hover:text-primary">
                         {link.label}
                       </Link>
                     </SheetClose>
                   ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
