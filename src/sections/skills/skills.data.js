import { images } from "../../constants";

const {
  blockchain,
  eth,
  angular,
  cucumber,
  figma,
  git,
  mongo,
  nextjs,
  nodejs,
  psql,
  react,
  ruby,
  selenium,
  sol
} = images;

export const data = {
  title: "Skills & Experience",
  skills: [
    {
      icons: [ruby, cucumber, selenium],
      expTitle: "QA / Automation Tester",
      expCompany: "Company / ",
    },
    {
      icons: [figma, git, angular, react, nextjs],
      expTitle: "Frontend Developer",
      expCompany: "Company / ",
    },
    {
      icons: [nodejs, mongo, psql],
      expTitle: "Backend Developer",
      expCompany: "Company / ",
    },
    {
      icons: [blockchain, eth, sol],
      expTitle: "Blockchain Developer",
      expCompany: "Company / ",
    },
  ],
};
