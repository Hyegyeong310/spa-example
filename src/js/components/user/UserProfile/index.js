import "./UserProfile.scss";
import profilePath from "../../../../assets/images/user-profile.svg";
import { getValue } from "../../../utils";

const UserProfile = (function () {
  const {
    gender,
    age,
    weight,
    height,
    fatPercentage,
    skeletalMuscle,
    visceralFat,
  } = getValue();

  const getGenderText = (gender) => {
    return gender === "male" ? "남성" : "여성";
  };

  const user = document.createElement("div");
  user.classList.add("user");

  const container = document.createElement("div");
  container.classList.add("user__container");

  const userProfile = `<img class="user__profile" src=${profilePath} />`;

  const userInfo =
    `<div class="user__info">` +
    `<h3>인바디 ∙ 체중기록</h3>` +
    `<i class="far fa-edit user__edit" id="edit"></i>` +
    `<div class="user__info-detail">` +
    `<dl><dt>성별</dt><dd>${gender ? getGenderText(gender) : "-"}</dd></dl>` +
    `<dl><dt>연령</dt><dd>${age || "-"} 대</dd></dl>` +
    `<dl><dt>체중</dt><dd>${weight || "-"} kg</dd></dl>` +
    `<dl><dt>신장</dt><dd>${height || "-"} cm</dd></dl>` +
    `<dl><dt>체지방률</dt><dd>${fatPercentage || "-"} %</dd></dl>` +
    `<dl><dt>골격근량</dt><dd>${skeletalMuscle || "-"} kg</dd></dl>` +
    `<dl><dt>내장지방레벨</dt><dd>${visceralFat || "-"}</dd></dl>` +
    `</div>` +
    `</div>`;

  container.insertAdjacentHTML("afterbegin", userProfile);
  container.insertAdjacentHTML("beforeend", userInfo);
  user.appendChild(container);

  return user;
})();

export default UserProfile;
