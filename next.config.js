/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	images: {
		domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
	},
};

module.exports = nextConfig;
