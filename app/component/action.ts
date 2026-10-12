"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import { orderSchema } from "@/data/schema";
import { createOrder } from "@/data/orders";

export type OrderState = {
  ok: boolean;
  message?: string;
  orderId?: string;
  values?: { name: string; phone: string; address: string };
  fieldErrors?: Record<string, string[] | undefined>;
};

export async function placeOrder(_prev: OrderState, formData: FormData): Promise<OrderState> {
  // A server action is a public endpoint: check the session INSIDE it.
  const session = (await cookies()).get("session")?.value;
  if (!session) return { ok: false, message: "Please sign in to place an order." };

  const values = {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    address: String(formData.get("address") ?? ""),
  };

  let items: unknown = [];
  try {
    items = JSON.parse(String(formData.get("items") ?? "[]"));
  } catch {}

  const result = orderSchema.safeParse({ ...values, items });
  if (!result.success) {
    return { ok: false, values, fieldErrors: z.flattenError(result.error).fieldErrors };
  }

  const order = await createOrder(result.data, session);
  return { ok: true, orderId: order.id };
}
