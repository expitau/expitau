import { getCollection } from "astro:content";

export const projects = (await getCollection("projects"))
    .sort(
        (a, b) =>
            (a.data.priority || 0) -
            (b.data.priority || 0),
    )
    .filter((p) => p.data.priority >= 0);

export const blog = (await getCollection("blog"))

export default {
    projects: projects,
    blog: blog,
}
