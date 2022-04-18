import { data } from './header.data';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link, Navbar, Particles, Socials } from '../../components';
import Image from 'next/image';

const {
	titlePartOne,
	titlePartTwo,
	descPartOne,
	descPartTwo,
	icons,
	heroImg,
	btnText,
	cvLink,
} = data;

export default function Header() {
	return (
		<header className='header' id='home'>
			<Navbar />

			<div className='bg-dark waves'>
				<Particles />

				<div className='container inner-wrapper'>
					<div className='banner'>
						<div className='banner__content'>
							<h1 className='banner__title'>
								{titlePartOne}
								<br />
								{titlePartTwo}
							</h1>
							<p className='banner__description'>
								{descPartOne}
								<br />
								{descPartTwo}
							</p>
							<div className='banner__buttons'>
								<Link
									aria-label='Review my CV'
									path={cvLink}
									target='_blank'
									rel='noreferrer'
									className='btn'>
									{btnText}
									<FaLongArrowAltRight />
								</Link>
								<Socials />
							</div>
						</div>
						<div className='banner__img'>
							<Image
								src={heroImg}
								alt='Portrait'
								aria-label='Portrait'
								priority
								loading='eager'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='header__shadowed-text'>
						{icons.map((icon, index) => (
							<Image
								key={index}
								src={icon}
								alt='brand name'
								aria-label='styled brand name'
								role='document'
								loading='lazy'
								layout='fixed'
							/>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
