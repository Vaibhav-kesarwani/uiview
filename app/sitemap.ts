import { MetadataRoute } from "next";

const baseUrl = "https://uiview.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjectSlugs();
  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: project.updatedAt || new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPosts = await getBlogPostSlugs();
  const blogPostEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticPages, ...projectEntries, ...blogPostEntries];
}

interface Project {
  slug: string;
  updatedAt?: string;
}

interface BlogPost {
  slug: string;
  updatedAt?: string;
}

async function getProjectSlugs(): Promise<Project[]> {
  console.log("Fetching project slugs...");
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [
    { slug: "project-a", updatedAt: "2025-05-20T10:00:00Z" },
    { slug: "project-b", updatedAt: "2025-06-05T14:30:00Z" },
    { slug: "project-c" },
  ];
}

async function getBlogPostSlugs(): Promise<BlogPost[]> {
  console.log("Fetching blog post slugs...");
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [
    { slug: "post-1-ui-trends", updatedAt: "2025-06-08T09:00:00Z" },
    { slug: "post-2-ux-best-practices", updatedAt: "2025-06-01T11:00:00Z" },
  ];
}
