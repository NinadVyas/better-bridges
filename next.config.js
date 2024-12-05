/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  hooks: {
    build: async () => {
      await require('child_process').execSync('npx prisma generate');
    },
  },
};

module.exports = nextConfig;
