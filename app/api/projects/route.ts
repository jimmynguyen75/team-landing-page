import { NextResponse } from "next/server";
import { Project } from "@/typings";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = 
groq`*[_type == "project"] {
  ...,
  technologies[] -> 
}`;

export async function GET() {
  const projects: Project[] = await client.fetch(query);
  return NextResponse.json({ projects })
}