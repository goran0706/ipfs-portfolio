import { Layout, SEO } from '../components';
import { About, Portfolio, Skills, Contact } from '../containers';

export default function Home() {
	return (
		<Layout>
			<SEO />
			<About />
			<Portfolio />
			<Skills />
			<Contact />
		</Layout>
	);
}
