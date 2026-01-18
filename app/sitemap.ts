import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://attocode.lat",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}