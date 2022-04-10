import Image from "next/image";
import { data } from "./skills.data";

const { title, skills } = data;

export default function Skills() {
  return (
    <section className="section section--padding section--dark" id="skills">
      <div className="skills container">
        <h2 className="skills__title">{title}</h2>
        {skills.map(({ icons, expTitle, expCompany }, i) => (
          <div className="skills__wrapper" key={i}>
            <div className="skills__icons">
              {icons.map((icon, i) => (
                <span key={i}>
                  <Image
                    src={icon}
                    alt="hero img"
                    width="48px"
                    height="48px"
                    layout="intrinsic"
                  />
                </span>
              ))}
            </div>
            <div className="experience">
              <span className="experience__icon-wrapper">
                <p>2018</p>
              </span>
              <div className="experience__content">
                <h4 className="experience__title">{expTitle}</h4>
                <p className="experience__description">{expCompany}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
