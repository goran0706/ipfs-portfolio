import { Footer } from '../components';
import { Header } from '.';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main id='content'>{children}</main>
			<Footer />
		</>
	);
}
