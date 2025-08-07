import { Landmark, Phone, Mail, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export function AppFooter() {
  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Landmark className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">
                Kizhisseri Sri Ayyappa Temple
              </span>
            </Link>
            <p className="text-muted-foreground font-body max-w-xs">
              A sacred place of worship and spiritual solace. Swamiye Saranam Ayyappa!
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-semibold">Contact Us</h3>
            <div className="space-y-2 font-body text-muted-foreground">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 12345 67890</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="hover:text-primary transition-colors">contact@ayyappantemple.org</span>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-semibold">Support the Temple</h3>
            <p className="text-muted-foreground font-body">
              Your generous contributions help us maintain the temple and serve the devotees.
            </p>
            <Button size="lg" className="w-full max-w-xs mx-auto md:mx-0">
              <HeartHandshake className="mr-2 h-5 w-5" />
              Donate Securely
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground font-body">
          <p>&copy; {new Date().getFullYear()} Kizhisseri Sri Ayyappa Temple. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
