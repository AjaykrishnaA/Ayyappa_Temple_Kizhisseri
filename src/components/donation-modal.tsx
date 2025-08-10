"use client"

import { useState } from 'react';
import Image from 'next/image';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from './ui/dialog';
import { Button } from './ui/button';
import { HeartHandshake, QrCode, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DonationModalProps {
  children: React.ReactNode;
}

export function DonationModal({ children }: DonationModalProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const upiId = "sreeayyappakshethramkizhisseri@sbi";
  const accountNumber = "44031429527";
  const ifscCode = "SBIN0071270";

  const copyToClipboard = async (text: string, label: string, itemKey: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemKey);
      toast({
        title: "Copied!",
        description: `${label} has been copied to clipboard.`,
      });
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HeartHandshake className="h-5 w-5 text-primary" />
            Donate to Kizhisseri Sri Ayyappa Temple
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* QR Code Section */}
          <div className="text-center space-y-4">
            <div className="relative mx-auto w-64 h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <Image
                src="/images/payment-qr-code.png"
                alt="Payment QR Code"
                width={240}
                height={240}
                className="rounded-lg"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.qr-fallback');
                  if (fallback) {
                    fallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="qr-fallback hidden absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                <QrCode className="h-16 w-16 mb-2" />
                <p className="text-sm">QR Code Image</p>
                <p className="text-xs">Please add payment QR code</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Scan the QR code to make a secure donation
            </p>
          </div>

          {/* Payment Details Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Payment Details</h4>
            
            <div className="space-y-3">
                             <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                 <div>
                   <p className="text-sm font-medium">UPI ID</p>
                   <p className="text-sm text-muted-foreground">{upiId}</p>
                 </div>
                 <Button
                   variant="ghost"
                   size="sm"
                   onClick={() => copyToClipboard(upiId, "UPI ID", "upi")}
                   className="h-8 w-8 p-0"
                 >
                   {copiedItem === "upi" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                 </Button>
               </div>

               <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                 <div>
                   <p className="text-sm font-medium">Account Number</p>
                   <p className="text-sm text-muted-foreground">{accountNumber}</p>
                 </div>
                 <Button
                   variant="ghost"
                   size="sm"
                   onClick={() => copyToClipboard(accountNumber, "Account Number", "account")}
                   className="h-8 w-8 p-0"
                 >
                   {copiedItem === "account" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                 </Button>
               </div>

               <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                 <div>
                   <p className="text-sm font-medium">IFSC Code</p>
                   <p className="text-sm text-muted-foreground">{ifscCode}</p>
                 </div>
                 <Button
                   variant="ghost"
                   size="sm"
                   onClick={() => copyToClipboard(ifscCode, "IFSC Code", "ifsc")}
                   className="h-8 w-8 p-0"
                 >
                   {copiedItem === "ifsc" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                 </Button>
               </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h5 className="font-medium text-blue-900 mb-2">How to Donate</h5>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Scan the QR code with any UPI app</li>
              <li>• Or use the UPI ID to make a payment</li>
              <li>• For bank transfer, use the account details above</li>
              <li>• All donations are tax-deductible</li>
            </ul>
          </div>

          <div className="text-center text-xs text-muted-foreground">
            <p>Your generous contribution helps maintain the temple and serve devotees.</p>
            <p className="mt-1">Swamiye Saranam Ayyappa! 🙏</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
