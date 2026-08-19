import { Button } from "@/components/ui/button";
import { Phone, ClipboardList } from "lucide-react";
import { BookingModal } from "@/components/features/BookingModal";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t p-2 md:hidden flex gap-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a href="tel:+919324780380" className="flex-1">
        <Button 
          variant="outline" 
          className="w-full border-trustBlue text-trustBlue"
        >
          <Phone className="mr-2 h-4 w-4" />
          Call Now
        </Button>
      </a>
      <BookingModal>
        <Button className="flex-1 bg-alertOrange hover:bg-alertOrange/90 text-white">
          <ClipboardList className="mr-2 h-4 w-4" />
          Get Quote
        </Button>
      </BookingModal>
    </div>
  );
}
