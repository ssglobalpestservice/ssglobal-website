"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/mockData";

const mumbaiSuburbs = [
  "Jogeshwari", "Goregaon", "Malad", "Kandivali", 
  "Borivali", "Andheri", "Bandra", "Thane", "Navi Mumbai"
];

// Flatten services for dropdown
const allServices = [
  ...services.residential.map(s => ({ id: s.id, title: s.title, type: 'Residential' })),
  ...services.commercial.map(s => ({ id: s.id, title: s.title, type: 'Commercial' }))
];

interface BookingFormProps {
  onSuccess?: () => void;
  defaultService?: string;
}

export function BookingForm({ onSuccess, defaultService }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceType: defaultService || "",
      bhkSize: "",
      location: "",
      address: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const text = `*New Website Lead*\n\n*Name:* ${data.fullName}\n*Phone:* ${data.phone}\n*Service:* ${data.serviceType}\n*Size:* ${data.bhkSize}\n*Location:* ${data.location}\n*Address:* ${data.address}${data.email ? `\n*Email:* ${data.email}` : ''}${data.message ? `\n*Message:* ${data.message}` : ''}`;
      
      const whatsappUrl = `https://wa.me/919324780380?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, "_blank");

      toast.success("Redirecting to WhatsApp!", {
        description: "Please send the pre-filled message to confirm your booking.",
      });
      
      form.reset();
      onSuccess?.();
    } catch (error) {
      toast.error("Error", {
        description: "Failed to open WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" className="bg-gray-50 focus-visible:ring-trustBlue" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="9324780380" className="bg-gray-50 focus-visible:ring-trustBlue" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" className="bg-gray-50 focus-visible:ring-trustBlue" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Required *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-50 focus:ring-trustBlue">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {allServices.map((service) => (
                      <SelectItem key={service.id} value={service.title}>
                        {service.title} ({service.type})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bhkSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Size *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-50 focus:ring-trustBlue">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1 BHK">1 BHK</SelectItem>
                    <SelectItem value="2 BHK">2 BHK</SelectItem>
                    <SelectItem value="3 BHK">3 BHK</SelectItem>
                    <SelectItem value="4+ BHK / Villa">4+ BHK / Villa</SelectItem>
                    <SelectItem value="Commercial Office">Commercial Office</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-50 focus:ring-trustBlue">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mumbaiSuburbs.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                    <SelectItem value="Other">Other Location</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Address *</FormLabel>
              <FormControl>
                <Input placeholder="Flat No, Building, Street..." className="bg-gray-50 focus-visible:ring-trustBlue" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Details (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us more about your pest problem..." 
                  className="resize-none bg-gray-50 focus-visible:ring-trustBlue" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full h-12 text-lg bg-trustBlue hover:bg-trustBlue/90" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Book Now"
          )}
        </Button>
      </form>
    </Form>
  );
}
