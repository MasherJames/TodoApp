import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      Copyright &copy; {new Date().getFullYear()} Todo App
    </footer>
  );
};
export default Footer;
