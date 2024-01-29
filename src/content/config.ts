import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const projects = defineCollection({
	type: 'data',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		longDescription: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		liveUrl: z.string().optional(),
		url: z.string().optional(),
		priority: z.number().optional(),
	}),
})

export const collections = { blog, projects };
