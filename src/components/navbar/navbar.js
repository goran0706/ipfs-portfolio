import { useState } from 'react';
import { Link } from 'react-scroll';
import Sticky from 'react-stickynode';
import { Logo } from '..';

import { data } from './navbar.data';

export default function Navbar() {
	const [isSticky, setIsSticky] = useState();

	const handleStateChange = status => {
		if (status.status === Sticky.STATUS_FIXED) {
			setIsSticky(true);
		} else if (status.status === Sticky.STATUS_ORIGINAL) {
			setIsSticky(false);
		}
	};

	return (
		<Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
			<div className='container'>
				<div className={`navbar ${isSticky ? 'sticky' : 'unSticky'}`}>
					<Logo path='/' className='navbar__brand' tabIndex={0} />

					<nav aria-label='primary'>
						<ul className='navbar__list'>
							{data.map(({ path, label }, i) => (
								<li key={i}>
									<Link
										tabIndex={0}
										className='navbar__item'
										activeClass='active'
										to={path}
										spy={true}
										smooth={true}
										offset={-75}
										duration={500}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</Sticky>
	);
}
