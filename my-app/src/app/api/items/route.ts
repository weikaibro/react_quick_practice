import { NextRequest, NextResponse } from "next/server";
import { getItems, addItem } from "@/lib/db";

export async function GET() {
  return NextResponse.json(getItems());
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, price } = body;

  if (!name || !price) {
    return NextResponse.json(
      { error: "Missing name or price" },
      { status: 400 }
    );
  }

  const newItem = addItem(name, price);
  return NextResponse.json(newItem);
}
