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
  try {
    const items = await getItems();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}

/**
 * Handles POST requests to create a new item
 * @async
 * @function POST
 * @param {NextRequest} request - The incoming HTTP request object containing the request body
 * @returns {Promise<NextResponse>} JSON response with the newly created item or error message
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, price } = body;

    if (!name || price === undefined || price === null) {
      return NextResponse.json(
        { error: "Missing name or price" },
        { status: 400 }
      );
    }

    const newItem = await addItem(name, Number(price));
    return NextResponse.json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 }
    );
  }
}