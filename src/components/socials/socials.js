import { Link } from '..';
import { socials } from './socials.data';

export default function Socials() {
	return (
		<nav aria-label='social'>
			<ul className='socials__list' aria-label='socials'>
				{socials.map(({ path, label, icon }, i) => (
					<li key={i}>
						<Link
							aria-label={label}
							className='socials__item'
							path={path}
							rel='noopener noreferrer'
							target='_blank'>
							{icon}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
