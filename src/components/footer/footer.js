import { Link } from 'react-scroll';
import { useState } from 'react';
import { RiArrowUpFill } from 'react-icons/ri';
import { data } from './footer.data';

const { title, navigateTop } = data;

export default function Footer() {
	const [year] = useState(new Date().getFullYear());

	return (
		<footer className='footer' aria-label='Footer'>
			<div className='container'>
				<h4 className='footer__title' aria-label='copyright text'>
					{title} &copy; <time dateTime={year}>{year}</time>
				</h4>

				<nav aria-label='navigate to header'>
					<Link
						className='footer__icon'
						activeClass='active'
						to='home'
						spy={true}
						smooth={true}
						offset={-75}
						duration={500}>
						<span>{navigateTop}</span>
						<RiArrowUpFill />
					</Link>
				</nav>
			</div>
		</footer>
	);
}
