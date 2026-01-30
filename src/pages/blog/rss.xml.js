import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const blog = await getCollection("blog");
    return rss({
        title: "Blog - Sōmaprabʰa",
        description: "Blogging whatever I find interesting. Mainly about programming",
        site: context.site,
        trailingSlash: false,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `blog/${post.id}`,
        })),
    });
}
