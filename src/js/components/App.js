import Footer from "./main/Footer";
import Header from "./main/Header";
import MainTemplate from "./main/MainTemplate";
import UserForm from "./user/UserForm";

const App = (function () {
  const app = document.createElement("div");
  app.classList.add("app");

  app.appendChild(UserForm);
  app.appendChild(Header);
  app.appendChild(MainTemplate);
  app.appendChild(Footer);

  return app;
})();

export default App;
