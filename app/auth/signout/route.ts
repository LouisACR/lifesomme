import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/types_db";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });

  const a = await supabase.auth.signOut();

  if (a.error) {
    return new NextResponse(JSON.stringify(a), {
      status: 501,
    });
  }
  return new NextResponse(JSON.stringify(a), {
    status: 200,
  });
}
