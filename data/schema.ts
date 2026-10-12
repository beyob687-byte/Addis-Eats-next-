import { z } from "zod";

// One schema for the form, the server action AND the route handler.
export const orderSchema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  phone: z
    .string()
    .trim()
    .regex(/^(\+251|0)9\d{8}$/, "Enter a valid Ethiopian mobile number, e.g. 0912345678"),
  address: z.string().trim().min(3, "Enter a delivery address"),
  items: z
    .array(
      z.object({
        dishId: z.string().min(1),
        qty: z.number().int().min(1).max(20),
      })
    )
    .min(1, "Your order is empty"),
});

export type OrderInput = z.infer<typeof orderSchema>;
