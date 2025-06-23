// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "127.0.0.1",
//         port: "1337",
//         pathname: "/uploads/**/*",
//       },
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "powerful-garden-6b4073cb38.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
