import { NextResponse } from "next/server";
import poems from "./poems-data.json"; // ← loads poems from JSON file in the same folder

export const dynamic = "force-static";   // Allows prerender + caching
export const revalidate = 3600;          // Revalidate every 1 hour

export async function GET() {
  return NextResponse.json(poems);       // Returns poems as API response
}
