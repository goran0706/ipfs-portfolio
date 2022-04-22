/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	optimizeFonts: true,
	assetPrefix: '.',
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		domains: ['assets'],
		formats: ['image/avif', 'image/webp'],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		minimumCacheTTL: 60,
		loader: 'akamai',
		path: '',
	},
	compilerOptions: {
		baseURL: 'src',
	},
	env: {
		serviceID: 'service_c74wbwe',
		templateID: 'portfolio_template',
		publicKey: 'WCRQ9J3pIFMxE6-nG',
	},
};

module.exports = nextConfig;
