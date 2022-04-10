import { useState } from "react";
import { data } from "./footer.data";

const { title, subtitle } = data;

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <h6 className="footer__title">{title}</h6>
      <p className="footer__subtitle">
        {subtitle} &copy; {year}
      </p>
    </footer>
  );
}
