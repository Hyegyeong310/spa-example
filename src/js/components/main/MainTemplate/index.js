import UserGraph from "../../user/UserGraph";
import UserProfile from "../../user/UserProfile";
import "./MainTemplate.scss";

const MainTemplate = (function () {
  const main = document.createElement("main");
  main.classList.add("main");

  main.appendChild(UserProfile);
  main.appendChild(UserGraph);

  return main;
})();

export default MainTemplate;
