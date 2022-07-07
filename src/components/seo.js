import Head from 'next/head';

export default function SEO({ title, description, keywords, author, meta }) {
	const metaData = [
		{ name: 'title', content: title },
		{ name: 'description', content: description },
		{ name: 'keywords', content: keywords },
		{ name: 'robots', content: 'index, follow' },
		{
			httpEquiv: 'Content-Security-Policy',
			content: "default-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *",
		},
		{ httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
		{ name: 'language', content: 'English' },
		{ name: 'author', content: author },
		{ itemProp: 'name', content: title },
		{ itemProp: 'description', content: description },
		{ name: 'twitter:card', content: 'summary' },
		{ name: 'twitter:title', content: title },
		{ name: 'twitter:description', content: description },
		{ name: 'og:title', content: title },
		{ name: 'og:description', content: description },
		{ name: 'og:site_name', content: title },
		{ name: 'og:type', content: 'website' },
	].concat(meta);

	return (
		<Head>
			<title>{title}</title>
			{metaData.map((item, i) => (
				<meta
					key={i}
					name={Object.entries(item)[0][1]}
					content={Object.entries(item)[1][1]}
				/>
			))}
		</Head>
	);
}

SEO.defaultProps = {
	title: 'Portfolio - Goran Gavrovski',
	description:
		'Goran develops a great quality websites that serves the long term, as well as decentralized applications as part of the Web3 ecosystem. The well-documented, clean, easy, and elegant interface helps any non-technical clients.',
	keywords:
		'portfolio, business, clean, creative, project gallery, modern, react, next.js, solidity, responsive, sass, blockchain, Ethereum, decentralized applications, Web3 ecosystem, javascript, truffle, hardhat, DeFi, smart contracts, IPFS, blockchain domains',
	author: 'Goran Gavrovski',
	lang: `en`,
	meta: [],
};
