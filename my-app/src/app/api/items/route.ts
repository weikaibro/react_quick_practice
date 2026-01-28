/**
 * API Route Handler for Items
 * This module handles HTTP requests for the /api/items endpoint
 */

import { NextRequest, NextResponse } from "next/server";
import { getItems, addItem } from "@/lib/db";

/**
 * Handles GET requests to retrieve all items
 * @async
 * @function GET
 * @returns {Promise<NextResponse>} JSON response containing all items from the database
 */
export async function GET() {
  return NextResponse.json(getItems());
}

/**
 * Handles POST requests to create a new item
 * @async
 * @function POST
 * @param {NextRequest} request - The incoming HTTP request object containing the request body
 * @returns {Promise<NextResponse>} JSON response with the newly created item or error message
 * @throws {400} Returns 400 status if name or price is missing
 */
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
