import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { data } from './contact.data';
import { RiMailSendFill } from 'react-icons/ri';
import { Link } from '../../components';

const {
	buttonText,
	emailLink,
	helpEmail,
	helpName,
	helpTextarea,
	labelEmail,
	labelName,
	labelTextarea,
	subtitle,
	text,
	title,
} = data;

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleNameChange = e => setName(e.target.value);
	const handleEmailChange = e => setEmail(e.target.value);
	const handleMessageChange = e => setMessage(e.target.value);

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_c74wbwe',
				'portfolio_template',
				e.target,
				'WCRQ9J3pIFMxE6-nG'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<section className='section section--padding bg-dark' id='contact'>
			<div className='contact container'>
				<h2 className='contact__title'>{title}</h2>
				<div className='contact__wrapper'>
					<div className='contact__content'>
						<h3 className='contact__subtitle'>{subtitle}</h3>
						<p className='contact__text'>{text[0]}</p>
						<p className='contact__text'>{text[1]}</p>
						<Link path={`mailto: ${emailLink}`} className='contact__link'>
							{emailLink}
						</Link>
					</div>
					<form className='contact__form' onSubmit={sendEmail}>
						<div className='input-group'>
							<label htmlFor='name' className='input-group__label'>
								{labelName}
								<span className='required'>*</span>
							</label>
							<input
								id='name'
								name='name'
								type='text'
								required
								aria-required='true'
								aria-label={helpName}
								placeholder={helpName}
								autoComplete='name'
								minLength={3}
								maxLength={30}
								className='input-group__input'
								onChange={handleNameChange}
								value={name}
							/>
						</div>
						<div className='input-group'>
							<label htmlFor='email' className='input-group__label'>
								{labelEmail}
								<span className='required'>*</span>
							</label>
							<input
								id='email'
								name='email'
								type='email'
								required
								aria-required='true'
								aria-label={helpEmail}
								placeholder={helpEmail}
								autoComplete='email'
								className='input-group__input'
								onChange={handleEmailChange}
								value={email}
							/>
						</div>
						<div className='input-group'>
							<label htmlFor='message' className='input-group__label'>
								{labelTextarea}
								<span className='required'>*</span>
							</label>
							<textarea
								id='message'
								name='message'
								type='text'
								required
								aria-required='true'
								aria-label={helpTextarea}
								placeholder={helpTextarea}
								autoComplete='message'
								className='input-group__input'
								onChange={handleMessageChange}
								value={message}
							/>
						</div>
						<div className='g-recaptcha' data-sitekey='portfolio'></div>
						<button type='submit'>
							{buttonText}
							<RiMailSendFill />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
