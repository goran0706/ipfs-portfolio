import { useState } from "react";
import { data } from "./footer.data";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <h6 className="footer__title">
        &copy; {data.footertitle} - {year}
      </h6>
    </footer>
  );
}
