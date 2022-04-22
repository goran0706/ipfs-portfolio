import Image from 'next/image';
import { Blob } from '../../components';
import { data } from './skills.data';

const { title, skills } = data;

export default function Skills() {
	return (
		<section className='section section--padding bg-dark' id='skills'>
			<div className='skills container'>
				<h2 className='skills__title'>{title}</h2>
				<Blob />

				{skills.map(({ icons, year, jobTitle, jobDesc, company }, i) => (
					<div className='skills__wrapper' key={i}>
						<div className='experience'>
							<span className='experience__icon-wrapper'>
								<p>{year}</p>
							</span>
							<div className='experience__content'>
								<h3 className='experience__title'>{jobTitle}</h3>
								<p className='experience__company'>{company}</p>
								<p className='experience__description'>{jobDesc}</p>
							</div>
						</div>

						<div className='skills__icons'>
							{icons.map((icon, i) => (
								<span key={i}>
									<Image
										src={icon}
										alt='skills brand icon'
										width='32px'
										height='32px'
										loading='lazy'
										layout='fixed'
										objectFit='contain'
									/>
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
