import { data } from './navbar.data';
import { HiX, HiMenu } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { Logo } from '..';
import { useState, useEffect, useRef } from 'react';
import Sticky from 'react-stickynode';

export default function Navbar() {
	const [expanded, setExpanded] = useState();
	const [isSticky, setIsSticky] = useState();
	const menuRef = useRef('menu');

	const handleStateChange = status => {
		if (status.status === Sticky.STATUS_FIXED) {
			setIsSticky(true);
		} else if (status.status === Sticky.STATUS_ORIGINAL) {
			setIsSticky(false);
		}
	};

	const handleClickOutsideMenu = e => {
		if (menuRef.current && !menuRef.current.contains(e.target)) {
			setExpanded(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutsideMenu);

		return () => {
			document.removeEventListener('mousedown', handleClickOutsideMenu);
		};
	}, []);

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
										duration={500}
										rel='nofollow'>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className='navbar__menu' ref={menuRef}>
						<span
							className='navbar__menu-button'
							onClick={() => setExpanded(!expanded)}>
							{expanded ? <HiX /> : <HiMenu />}
						</span>

						{expanded && (
							<nav aria-label='primary' className='navbar__menu-content'>
								<ul className='navbar__menu-list'>
									{data.map(({ path, label }, i) => (
										<li key={i}>
											<Link
												tabIndex={0}
												className='navbar__menu-item'
												activeClass='active'
												to={path}
												spy={true}
												smooth={true}
												offset={-75}
												duration={500}
												rel='nofollow'>
												{label}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						)}
					</div>
				</div>
			</div>
		</Sticky>
	);
}
