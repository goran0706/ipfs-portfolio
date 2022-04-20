import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import { data } from './portfolio.data';

const { title, badgeLabels, projects, learnMore, viewMore } = data;

export default function Portfolio() {
	return (
		<section className='section section--padding bg-dark waves' id='portfolio'>
			<div className='portfolio container'>
				<h2 className='portfolio__title'>{title}</h2>
				<div className='portfolio__badges'>
					{badgeLabels.map((label, i) => (
						<span key={i} aria-label={`badge to show only ${label} projects`}>
							{label}
						</span>
					))}
				</div>
				<div className='portfolio__list'>
					{projects.map(({ src, title, subtitle }, i) => (
						<div className='card' key={i}>
							<div className='card__header'>
								<div className='card__figure'>
									<Image
										src={src}
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
								<div className='card__actions'>
									<p>{learnMore}</p>
									<FaAngleRight />
								</div>
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
