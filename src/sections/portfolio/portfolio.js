import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { data } from "./portfolio.data";

const { title, badgeLabels, projects, btnViewMore } = data;

export default function Portfolio() {
  return (
    <section
      className="section section--wave section--padding section--dark"
      id="portfolio"
    >
      <div className="portfolio container">
        <h2 className="portfolio__title">{title}</h2>
        <div className="portfolio__badges">
          {badgeLabels.map((label, i) => (
            <span key={i}>{label} </span>
          ))}
        </div>
        <div className="portfolio__list">
          {projects.map(({ src, title, subtitle }, i) => (
            <div className="card" key={i}>
              <div className="card__header">
                <div className="card__figure">
                  <Image
                    className="card__image"
                    src={src}
                    alt="hero img"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="card__body">
                <div className="card__title">{title}</div>
                <div className="card__subtitle">{subtitle}</div>
              </div>
              <div className="card__footer">
                <div className="card__actions">
                  <FaExternalLinkAlt />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more">
          <button className="btn--outline">{btnViewMore}</button>
        </div>
      </div>
    </section>
  );
}
