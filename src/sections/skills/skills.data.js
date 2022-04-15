import { images } from "../../constants";

const {
	android,
	angular,
	blockchain,
	cucumber,
	eth,
	figma,
	git,
	java,
	mongo,
	nextjs,
	nodejs,
	psql,
	react,
	ruby,
	selenium,
	sol,
} = images;

export const data = {
	title: "Skills & Experience",
	skills: [
		{
			icons: [git, android, java],
			year: "2017",
			jobTitle: "Internship",
			jobDesc: "Java/Android Developer (Internship) at BMG Universe",
			company: "BMG Universe",
		},
		{
			icons: [ruby, cucumber, selenium],
			year: "2018",
			jobTitle: "QA Automation Tester",
			jobDesc:
				"QA Automation tester | Ruby | Selenium | Mocha | Cucumber",
			company: "ITCrowd - a technology company",
		},
		{
			icons: [figma, git, angular, react, nextjs],
			year: "2020",
			jobTitle: "Frontend Developer",
			jobDesc: "UI/UX Front-End Developer | HTML | CSS | Angular | React",
			company: "Kromatik Solutions - Software Service Provider",
		},
		{
			icons: [nodejs, mongo, psql],
			year: "2020",
			jobTitle: "Backend Developer",
			jobDesc:
				"Back-End Developer | Java | Node.js | MongoDB | Postgresql",
			company: "Kromatik Solutions - Software Service Provider",
		},
		{
			icons: [blockchain, eth, sol],
			year: "2021",
			jobTitle: "Blockchain Developer",
			jobDesc:
				"Blockchain Developer | Solidity | Web3 | Ethers.js | Truffle | Hardhat | IPFS",
			company: "Kromatik Solutions - Software Service Provider",
		},
	],
};
