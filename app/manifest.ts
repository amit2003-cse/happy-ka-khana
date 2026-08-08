import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Happy Ka Khana",
    short_name: "HappyKhana",
    description: "Ghar Jaisa Tiffin, Daily Delivered — Patna",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#1B5E2E",
    background_color: "#FFFAF5",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
