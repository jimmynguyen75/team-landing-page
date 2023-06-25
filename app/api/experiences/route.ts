import { Experience } from "@/typings";
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = 
groq`*[_type == "experience"] {
  ...,
  technologies[] -> 
}`;

export async function GET() {
  const experiences: Experience[] = await client.fetch(query);
  return NextResponse.json({ experiences })
}