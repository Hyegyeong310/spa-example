import "./Footer.scss";

const Footer = (function () {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerContent =
    `<div class="footer__container">` +
    `<div class="footer__description">` +
    `© 2021. All Rights Reserved.` +
    `</div>` +
    `</div>`;

  footer.insertAdjacentHTML("afterbegin", footerContent);

  return footer;
})();

export default Footer;
