import * as z from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian mobile number." }),
  serviceType: z.string().min(1, { message: "Please select a service." }),
  location: z.string().min(1, { message: "Please select a location." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
