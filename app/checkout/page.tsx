import { cookies } from "next/headers";
import CheckoutForm from "../component/CheckoutForm";

// Reading the cookie makes this route dynamic (λ) — that is intended.
export default async function CheckoutPage() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return <p role="alert">Please sign in to check out.</p>;

  return (
    <main>
      <h1>Checkout</h1>
      <CheckoutForm />
    </main>
  );
}