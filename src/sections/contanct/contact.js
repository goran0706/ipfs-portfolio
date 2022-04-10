import { data } from "./contact.data";

const {
  title,
  subtitle,
  text,
  email,
  labelName,
  helpName,
  labelEmail,
  helpEmail,
  labelTextarea,
  helpTextarea,
  buttonText,
} = data;

export default function Skills() {
  return (
    <section className="section section--padding section--dark" id="contact">
      <div className="contact container">
        <h2 className="contact__title">{title}</h2>
        <div className="contact__wrapper">
          <div className="contact__content">
            <h4 className="contact__subtitle">{subtitle}</h4>
            <p className="contact__text">{text}</p>
            <a href={`mailto: ${email}`} className="contact__link">
              {email}
            </a>
          </div>
          <form className="contact__form">
            <div className="input-group">
              <label htmlFor="myInput" className="input-group__label">
                {labelName}
              </label>
              <input
                type="text"
                id="myInput"
                className="input-group__input"
                autoComplete="off"
              />
              <span className="input-group__help">{helpName}</span>
            </div>
            <div className="input-group">
              <label htmlFor="myInput" className="input-group__label">
                {labelEmail}
              </label>
              <input
                type="text"
                id="myInput"
                className="input-group__input"
                autoComplete="off"
              />
              <span className="input-group__help">{helpEmail}</span>
            </div>
            <div className="input-group">
              <label htmlFor="myInput" className="input-group__label">
                {labelTextarea}
              </label>
              <textarea
                type="text"
                id="myInput"
                className="input-group__input"
              />
              <span className="input-group__help">{helpTextarea}</span>
            </div>
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
