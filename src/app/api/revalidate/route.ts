import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.NEXT_PUBLIC_REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // Manually trigger revalidation of the `/about` page
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?secret=${process.env.NEXT_PUBLIC_REVALIDATION_SECRET}`,
      {
        method: "POST",
      }
    );
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
