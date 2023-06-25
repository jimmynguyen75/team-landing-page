import { Experience } from "@/typings";

export const fetchExperience = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experiences`, { next: { revalidate: 60 } });

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
}