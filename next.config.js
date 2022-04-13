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
		formats: ["image/png", "image/svg"],
	},
	compilerOptions: {
		baseURL: "src",
	},
};

module.exports = nextConfig;
