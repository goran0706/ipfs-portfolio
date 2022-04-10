import { socials } from "./socials.data";
import { Link } from "..";

export default function Socials() {
  return (
    <div className="socials__list">
      {socials.map(({ path, icon }, i) => (
        <Link
          key={i}
          path={path}
          target="_blank"
          rel="noopener noreferrer"
          className="socials__item"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}
