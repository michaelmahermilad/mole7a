import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images:{
    domains:['randomuser.me']
  },
  redirects:async()=> {
    return [
      {
        source: '/', // The path users initially access
        destination: '/about', // The path you want to redirect them to
        permanent: true, // Use true for permanent redirects (301), false for temporary (302)
      },
    ];
  }
};

export default nextConfig;
 