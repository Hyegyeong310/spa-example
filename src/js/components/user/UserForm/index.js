import { getValue } from "../../../utils";
import "./UserForm.scss";

const UserForm = (function () {
  const {
    age,
    gender,
    weight,
    height,
    fatPercentage,
    skeletalMuscle,
    visceralFat,
  } = getValue();
  const form = document.createElement("form");
  form.classList.add("form");

  const selectedOption = (value = "") => {
    return age === String(value) ? "selected" : "";
  };

  const formContent =
    `<div class="form__background"></div>` +
    `<div class="form__container">` +
    `<div class="form__header">` +
    `<h3 class="form__title">인바디 ∙ 체중기록</h3>` +
    `<i class="close fas fa-times" id="close"></i>` +
    `</div>` +
    `<div class="form__content">` +
    `<div class="form__content-figure">` +
    `<span>성별</span>` +
    `<div>` +
    `<input type="radio" id="male" value="male" name="gender" ${
      !gender || gender === "male" ? "checked" : ""
    } required /><label for="male">남</label>` +
    `<input type="radio" id="female" value="female" name="gender" ${
      gender === "female" ? "checked" : ""
    } required /><label for="female">여</label>` +
    `</div>` +
    `</div>` +
    `<div class="form__content-figure">` +
    `<span>연령</span>` +
    `<select name="age" value=${age}>` +
    `<option value="" ${selectedOption()}>전체</option>` +
    `<option value="10" ${selectedOption(10)}>10대</option>` +
    `<option value="20" ${selectedOption(20)}>20대</option>` +
    `<option value="30" ${selectedOption(30)}>30대</option>` +
    `<option value="40" ${selectedOption(40)}>40대</option>` +
    `<option value="50" ${selectedOption(50)}>50대</option>` +
    `<option value="60" ${selectedOption(60)}>60대</option>` +
    `</select>` +
    `</div>` +
    `<div class="form__content-figure">` +
    `<span>체중 (kg)</span>` +
    `<input type="number" value=${weight} name="weight" placeholder="체중 (kg)" min="10" max="200" step="0.1" required />` +
    `</div>` +
    `<div class="form__content-figure">` +
    `<span>신장 (cm)</span>` +
    `<input type="number" value=${height} name="height" placeholder="신장 (cm)" min="50" max="300" step="0.1" required />` +
    `</div>` +
    `<div class="form__content-figure">` +
    `<span>체지방률 (%)</span>` +
    `<input type="number" value=${fatPercentage} name="fatPercentage" placeholder="체지방률 (%)" min="1.0" max="70.0" step="0.1" required />` +
    `</div>` +
    `<div class="form__content-figure">` +
    `<span>골격근량 (kg)</span>` +
    `<input type="number" value=${skeletalMuscle} name="skeletalMuscle" placeholder="골격근량 (kg)" min="1.0" max="99.0" step="0.1" required />` +
    `</div>` +
    `<div class="form__content-figure">` +
    `<span>내장지방레벨</span>` +
    `<input type="number" value=${visceralFat} name="visceralFat" placeholder="내장지방레벨" min="1" max="20" required/>` +
    `</div>` +
    `</div>` +
    `<div class="form__footer">` +
    `<button type="submit">완료</button>` +
    `</div>` +
    `</div>`;

  form.insertAdjacentHTML("afterbegin", formContent);
  return form;
})();

export default UserForm;
