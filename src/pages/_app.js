import Head from 'next/head';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Goran Gavrovski&apos;s Portfolio</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta
					httpEquiv='Content-Security-Policy'
					content="default-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default App;
