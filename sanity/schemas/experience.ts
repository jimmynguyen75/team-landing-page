import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "companyImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "company",
      title: "Project",
      type: "text",
    }),
    defineField({
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    }),
    defineField({
      name: "isCurrentWorkingHere",
      title: "IsCurrentWorkingHere",
      type: "boolean",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string"}],
    }),
  ],
});
