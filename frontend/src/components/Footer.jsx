import React from "react";
import "../css/footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="footer">
      <h5>&copy; {year} - SugarIt</h5>
    </footer>
  );
};

export default Footer;
