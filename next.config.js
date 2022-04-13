/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	optimizeFonts: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		domains: ["assets"],
		formats: ["image/avif", "image/webp"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
		minimumCacheTTL: 60,
		loader: "custom",
	},
	compilerOptions: {
		baseURL: "src",
	},
};

module.exports = nextConfig;
