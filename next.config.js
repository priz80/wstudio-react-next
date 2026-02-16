// next.config.js

/* const isProd = process.env.NODE_ENV === "production"; */

/* @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: false,
  output: "export",
  // basePath: isProd ? "/wstudio-react-next" : "",
  // assetPrefix: isProd ? "/wstudio-react-next/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  /* experimental: {
    externalDir: true,
  }, */

  /* webpack: (config, { dev, isServer }) => {
    return config;
  }, */
};

export default nextConfig;