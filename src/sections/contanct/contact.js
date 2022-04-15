import { data } from "./contact.data";
import { RiMailSendFill } from "react-icons/ri";

const {
	buttonText,
	email,
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

export default function Skills() {
	return (
		<section
			className="section section--padding section--dark"
			id="contact"
		>
			<div className="contact container">
				<h2 className="contact__title">{title}</h2>
				<div className="contact__wrapper">
					<div className="contact__content">
						<h4 className="contact__subtitle">{subtitle}</h4>
						<p className="contact__text">{text[0]}</p>
						<p className="contact__text">{text[1]}</p>
						<a href={`mailto: ${email}`} className="contact__link">
							{email}
						</a>
					</div>
					<form className="contact__form">
						<div className="input-group">
							<label
								htmlFor="myInput"
								className="input-group__label"
							>
								{labelName}
								<span className="required">*</span>
							</label>
							<input
								type="text"
								id="myInput"
								className="input-group__input"
								autoComplete="off"
							/>
							<span className="input-group__help">
								{helpName}
							</span>
						</div>
						<div className="input-group">
							<label
								htmlFor="myInput"
								className="input-group__label"
							>
								{labelEmail}
								<span className="required">*</span>
							</label>
							<input
								type="text"
								id="myInput"
								className="input-group__input"
								autoComplete="off"
							/>
							<span className="input-group__help">
								{helpEmail}
							</span>
						</div>
						<div className="input-group">
							<label
								htmlFor="myInput"
								className="input-group__label"
							>
								{labelTextarea}
							</label>
							<textarea
								type="text"
								id="myInput"
								className="input-group__input"
								placeholder={helpTextarea}
							/>
						</div>
						<button type="submit">
							{buttonText}
							<RiMailSendFill />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
