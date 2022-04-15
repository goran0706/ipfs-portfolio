import { data } from "./header.data";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Particles, Socials } from "../../components";
import Image from "next/image";

const {
	titlePartOne,
	titlePartTwo,
	descPartOne,
	descPartTwo,
	icons,
	heroImg,
	btnText,
	cvLink,
} = data;

export default function Header() {
	return (
		<section
			className="section--header section--padding section--wave section--dark"
			id="home"
		>
			<Particles />
			<div className="header container ">
				<div className="banner">
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
							<a
								href={cvLink}
								target="_blank"
								rel="noreferrer"
								className="btn"
							>
								{btnText}
								<FaLongArrowAltRight />
							</a>
							<Socials />
						</div>
					</div>
					<div className="banner__img">
						<Image
							src={heroImg}
							alt="hero img"
							layout="fill"
							priority={false}
						/>
					</div>
				</div>
				<span>
					{icons.map((icon, index) => (
						<span key={index} className="header__shadowed-text">
							<Image
								src={icon}
								alt="web 3 styled text"
								layout="intrinsic"
							/>
						</span>
					))}
				</span>
			</div>
		</section>
	);
}
