import Head from 'next/head';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* COMMON TAGS */}
				<title>Goran Gavrovski - Portfolio</title>
				<meta name='title' content='Goran Gavrovski - Portfolio' />
				<meta
					name='description'
					content='Goran develops a great quality website that serves the long term, as well as decentralized applications. The well-documented, clean, easy, and elegant interface helps any non-technical clients.'
				/>
				<meta
					name='keywords'
					content='portfolio, business, clean, creative, project gallery, modern, react, next.js, solidity, responsive, sass, blockchain, Ethereum, decentralized applications, web3, javascript, truffle, hardhat, Defi, smart contracts, IPFS, blockchain domains'
				/>
				<meta name='robots' content='index, follow' />
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta name='language' content='English' />
				<meta name='author' content='Goran Gavrovski' />
				<meta
					httpEquiv='Content-Security-Policy'
					content="default-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *"
				/>

				{/* Schema.org for Google */}
				<meta itemProp='name' content='Goran Gavrovski - Portfolio' />
				<meta
					itemProp='description'
					content='Goran develops a great quality website that serves the long term, as well as decentralized applications. The well-documented, clean, easy, and elegant interface helps any non-technical clients.'
				/>
				{/* Twitter */}
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:title' content='Goran Gavrovski - Portfolio' />
				<meta
					name='twitter:description'
					content='Goran develops a great quality website that serves the long term, as well as decentralized applications. The well-documented, clean, easy, and elegant interface helps any non-technical clients.'
				/>
				{/* Open Graph general (Facebook, Pinterest & Google+) */}
				<meta name='og:title' content='Goran Gavrovski - Portfolio' />
				<meta
					name='og:description'
					content='Goran develops a great quality website that serves the long term, as well as decentralized applications. The well-documented, clean, easy, and elegant interface helps any non-technical clients.'
				/>
				<meta name='og:site_name' content='Goran Gavrovski - Portfolio' />
				<meta name='og:type' content='website' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default App;
