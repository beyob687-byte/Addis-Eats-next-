import { getDishes } from "@/data/data";


export async function GET() {
  return Response.json(await getDishes());
}