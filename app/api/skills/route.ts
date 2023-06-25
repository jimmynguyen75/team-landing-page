import { NextResponse } from "next/server";
import { Skill } from "@/typings";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = 
groq`*[_type == "skill"]`;

export async function GET() {
  const skills: Skill[] = await client.fetch(query);
  return NextResponse.json({ skills })
}