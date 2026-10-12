import type { OrderInput } from "./schema";


const orders: Array<OrderInput & { id: string; userId: string; createdAt: string }> = [];

export async function createOrder(data: OrderInput, userId = "anonymous") {
  const order = { id: crypto.randomUUID(), userId, ...data, createdAt: new Date().toISOString() };
  orders.push(order);
  return order;
}