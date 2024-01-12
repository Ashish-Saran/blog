import React from "react";
import "../css/footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {year} - SugarIt</p>
      <p>
        The information on this site is for educational purposes only and should
        not be considered diagnostic or medical advice.
      </p>
    </footer>
  );
};

export default Footer;
