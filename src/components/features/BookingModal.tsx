"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookingForm } from "./BookingForm";

interface BookingModalProps {
  children: React.ReactNode;
  defaultService?: string;
}

export function BookingModal({ children, defaultService }: BookingModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children as React.ReactElement} />
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-trustBlue">Consult with S.S Global</DialogTitle>
          <DialogDescription>
            Fill out the form below and our experts will get back to you immediately to confirm your appointment.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <BookingForm 
            onSuccess={() => setOpen(false)} 
            defaultService={defaultService} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
