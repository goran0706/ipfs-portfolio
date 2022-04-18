import { data } from './about.data';

const { title, services } = data;

export default function About() {
	return (
		<section className='section section--padding bg-light' id='about'>
			<div className='about container'>
				<h2 className='about__title'>{title}</h2>
				<div className='about__features'>
					{services.map(({ icon, title, description }, i) => (
						<div className='about__item' key={i}>
							<span className='about__item-icon'>{icon}</span>
							<div>
								<h3 className='about__item-title'>{title}</h3>
								<p
									className='about__item-description'
									aria-label='IT developer role description'>
									{description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
