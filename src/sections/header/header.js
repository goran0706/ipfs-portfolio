import Image from "next/image";
import { Particles, Socials } from "../../components";
import { images } from "../../constants";
import { data } from "./header.data";

const {
  titlePartOne,
  titlePartTwo,
  descPartOne,
  descPartTwo,
  btnText,
} = data;

export default function Header() {
  return (
    <section className="section--padding section--wave section--dark" id="home">
      <Particles />
      <div className="header container ">
        <div className='banner'>
          <div className="banner__content">
            <h1 className="banner__title">
              {titlePartOne}
              <br />
              {titlePartTwo}
            </h1>
            <p className="banner__description">
              {descPartOne}
              <br />
              {descPartTwo}
            </p>
            <div className="banner__buttons">
              <button>{btnText}</button>
              <Socials />
            </div>
          </div>
          <div className="banner__img">
            <Image src={images.hero} alt="hero img" layout="fill" priority={false}/>
          </div>
        </div>
        <span className="header__shadowed-text">
          <Image src={images.web3} alt="web 3 styled text" layout="intrinsic" />
          <Image src={images.ethereum} alt="Ethereum styled text" layout="intrinsic" />
          <Image src={images.solidity} alt="Solidity styled text" layout="intrinsic" />
          <Image src={images.nft} alt="NFT styled text" layout="intrinsic" />
        </span>
      </div>
    </section>
  );
}
