import logoPath from "../../../../assets/images/logo.png";
import "./Header.scss";

const Header = (function () {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerContent =
    `<div class="header__container">` +
    `<img class="header__logo" src=${logoPath} />` +
    `</div>`;

  header.insertAdjacentHTML("afterbegin", headerContent);

  return header;
})();

export default Header;
