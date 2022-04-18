import {
	SiEthereum,
	SiJavascript,
	SiSolidity,
	SiWeb3Dotjs,
} from 'react-icons/si';
import { MdDeveloperMode } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

export const data = {
	title: 'About Me',
	services: [
		{
			icon: <SiEthereum />,
			title: 'Ethereum Blockchain Developer',
			description:
				'Quisque lorem eros, ultrices commodo tortor ut, cursus venenatis elit. Morbi aliquam aliquam malesuada. Pellentesque id mauris porttitor, cursus libero sit.',
		},
		{
			icon: <SiWeb3Dotjs />,
			title: 'Web 3.0 Developer',
			description:
				'Quisque lorem eros, ultrices commodo tortor ut, cursus venenatis elit. Morbi aliquam aliquam malesuada. Pellentesque id mauris porttitor, cursus libero sit.',
		},
		{
			icon: <SiSolidity />,

			title: 'Solidity Developer',
			description:
				'Quisque lorem eros, ultrices commodo tortor ut, cursus venenatis elit. Morbi aliquam aliquam malesuada. Pellentesque id mauris porttitor, cursus libero sit.',
		},
		{
			icon: <SiJavascript />,
			title: 'React/Angular/Node.js Developer',
			description:
				'Quisque lorem eros, ultrices commodo tortor ut, cursus venenatis elit. Morbi aliquam aliquam malesuada. Pellentesque id mauris porttitor, cursus libero sit.',
		},
		{
			icon: <MdDeveloperMode />,
			title: 'Backend Developer',
			description:
				'Quisque lorem eros, ultrices commodo tortor ut, cursus venenatis elit. Morbi aliquam aliquam malesuada. Pellentesque id mauris porttitor, cursus libero sit.',
		},
		{
			icon: <CgWebsite />,
			title: 'Frontend Developer',
			description:
				'Quisque lorem eros, ultrices commodo tortor ut, cursus venenatis elit. Morbi aliquam aliquam malesuada. Pellentesque id mauris porttitor, cursus libero sit.',
		},
	],
};
