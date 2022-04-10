import Image from "next/image";
import { Particles, Socials } from "../../components";
import { images } from "../../constants";
import { data } from "./header.data";

const {
  titlePartOne,
  titlePartTwo,
  titleShadow,
  descPartOne,
  descPartTwo,
  btnText,
} = data;

export default function Header() {
  return (
    <section className="section--padding section--wave section--dark" id="home">
      <Particles />
      <div className="header container ">
        <div className="header__content">
          <h1 className="header__title">
            {titlePartOne}
            <br />
            {titlePartTwo}
          </h1>
          <h1 className="header__title--shadowed">{titleShadow}</h1>

          <p className="header__description">
            {descPartOne}
            <br />
            {descPartTwo}
          </p>

          <div className="header__buttons">
            <button>{btnText}</button>
            <Socials />
          </div>
        </div>
        <div className="header__img">
          <Image src={images.hero} alt="hero img" layout="fill" />
        </div>
      </div>
    </section>
  );
}
