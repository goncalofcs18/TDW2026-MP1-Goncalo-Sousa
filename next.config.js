/** @type {import('next').NextConfig} */
module.exports = {
  // Produces a folder of static files (out/) that Cloudflare serves as-is.
  output: "export",
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
};
