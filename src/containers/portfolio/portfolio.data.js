import { images } from '../../constants';

export const data = {
	title: 'Portfolio',
	badgeLabels: [
		'UI/UX',
		'Web App',
		'Web3 App',
		'Solidity',
		'React JS',
		'Node JS',
		'IPFS',
		'All',
	],
	projects: [
		{
			imgSrc: images.portfolio,
			title: 'Portfolio',
			subtitle: 'UI/UX, React JS, Web App, Web3 App, IPFS',
			href: 'https://portfolio-ipfs.on.fleek.co/',
		},
		{
			imgSrc: images.ipfsNotes,
			title: 'IPFS-Notes',
			subtitle: 'UI/UX, React JS, Web App, Web3 App, IPFS',
			href: 'https://ipfs-notes.on.fleek.co/',
		},
		{
			imgSrc: images.randomQuoteGenerator,
			title: 'Random Quote Generator',
			subtitle: 'UI/UX, React JS, Web App',
			href: 'https://random-quote-generator-zeta-gold.vercel.app/',
		},
	],
	explore: 'Explore',
	viewMore: 'View More',
};
