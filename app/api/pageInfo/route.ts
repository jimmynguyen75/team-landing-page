import { NextResponse } from "next/server";
import { PageInfo } from "@/typings";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = 
groq`*[_type == "pageInfo"][0]`;

export async function GET() {
  const pageInfo: PageInfo[] = await client.fetch(query);
  return NextResponse.json({ pageInfo })
}