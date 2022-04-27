import { useState } from 'react';
import { FaWpexplorer } from 'react-icons/fa';
import { data } from './portfolio.data';
import Image from 'next/image';
import Link from '../../components/link';

const { title, badgeLabels, projects, explore, viewMore } = data;

export default function Portfolio() {
	const [filter, setFilter] = useState('All');
	const [filtered, setFiltered] = useState(projects);

	const handleFilterClick = e => {
		const query = e.target.innerText;

		setFilter(query);

		if (query === 'All') {
			setFiltered(projects);
		} else {
			setFiltered(projects.filter(p => p.subtitle.includes(query)));
		}
	};

	return (
		<section className='section section--padding bg-dark waves' id='portfolio'>
			<div className='portfolio container'>
				<h2 className='portfolio__title'>{title}</h2>
				<div className='portfolio__badges'>
					{badgeLabels.map((label, i) => (
						<span
							key={i}
							id={label}
							className={label === filter ? 'active' : ''}
							aria-label={`button to filter projects and show only ${label} projects`}
							onClick={handleFilterClick}>
							{label}
						</span>
					))}
				</div>
				<div className='portfolio__list'>
					{filtered.map(({ imgSrc, title, subtitle, href }, i) => (
						<div className='card' key={i}>
							<div className='card__header'>
								<div className='card__figure'>
									<Image
										src={imgSrc}
										className='card__image'
										alt='Project screenshot'
										aria-label='Project screenshot'
										loading='lazy'
										layout='responsive'
										objectFit='cover'
									/>
								</div>
							</div>
							<div className='card__body'>
								<div className='card__title'>{title}</div>
								<div className='card__subtitle'>{subtitle}</div>
							</div>
							<div className='card__footer'>
								<Link path={href} target='_blank' rel='noopener noreferrer'>
									<div className='card__action'>
										{explore} <FaWpexplorer />
									</div>
								</Link>
							</div>
						</div>
					))}
				</div>

				<div className='view-more'>
					<button className='btn--outline'>{viewMore}</button>
				</div>
			</div>
		</section>
	);
}
