import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_SECTION } from "../../../utils/ArrayFooter";
import { useMyContextGlobal } from "../../../context/global.context";
import "./Footer.css";

const imagesDh = "/images/DH.png";

const Footer = () => {
  const { state } = useMyContextGlobal();

  const getThemeClass = () => {
    return state.theme ? "light" : "dark";
  };

  return (
    <>
      <footer className={`footer ${getThemeClass()}`}>
        {FOOTER_SECTION.map((section, index) => (
          <div key={index} className="container-footer">
           {/*  <h2 className={`footer-title ${getThemeClass()}`}>{section.title}</h2> */}
            <ul className="footer-ul">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link.internal ? (
                    <Link className={getThemeClass()} to={link.path}>
                      {link.name}
                    </Link>
                  ) : (
                    <a className={getThemeClass()} href={link.path} target="_blank" >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <img src={imagesDh} alt="Logo DH" className="footer-logo" />
    </>
  );
};

export default Footer;