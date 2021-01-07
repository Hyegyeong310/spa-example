import "../css/styles.scss";
import App from "./components/App";
import { saveValue } from "./utils";

const root = document.getElementById("root");

root.appendChild(App);

window.onload = function () {
  const form = document.querySelector(".form");
  const edit = document.getElementById("edit");
  const close = document.getElementById("close");

  const showModal = () => {
    form.classList.add("visible");
  };
  edit.addEventListener("click", showModal);

  const hideModal = () => {
    form.classList.remove("visible");
  };
  close.addEventListener("click", hideModal);

  const handleSubmit = (e) => {
    const values = [
      ...form.getElementsByTagName("input"),
      ...form.getElementsByTagName("select"),
    ].reduce((accu, curr) => {
      const name = curr.name;
      const value = curr.value;
      if (name === "gender") {
        if (curr.checked) {
          accu[name] = value;
        }
      } else {
        accu[name] = value;
      }
      return accu;
    }, {});
    saveValue(values);
    hideModal();
  };
  form.addEventListener("submit", handleSubmit);
};
