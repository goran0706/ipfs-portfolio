import { Layout } from '../components';
import { About, Portfolio, Skills, Contact } from '../containers';

export default function Home() {
	return (
		<Layout>
			<About />
			<Portfolio />
			<Skills />
			<Contact />
		</Layout>
	);
}
