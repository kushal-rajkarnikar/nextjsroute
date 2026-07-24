/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tells Next.js to generate static HTML/CSS/JS (inside the 'out' folder)
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default image optimization
  },
  // Replace 'your-repo-name' with your exact GitHub repository name
  basePath:
    process.env.NODE_ENV === "production"
      ? "/https://github.com/kushal-rajkarnikar/nextjsroute.git"
      : "",
};

export default nextConfig;
