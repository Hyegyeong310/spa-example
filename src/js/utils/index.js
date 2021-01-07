const MALE = "male";
const USER_INFO = "userInfo";

// 표준체중 산출
const getStandardWeight = (height, gender) => {
  return Math.pow(height / 100, 2) * (gender === MALE ? 22 : 21);
};

// 표준 제지방량 산출
const getStandardLeanBody = (height, gender) => {
  return getStandardWeight(height, gender) * (gender === MALE ? 0.85 : 0.77);
};

// 제지방량 산출
const getLeanBody = (weight, height) => {
  return 1.1 * weight - 128 * ((weight * weight) / (height * height));
};

// 체지방량 산출
const getBodyFat = (weight, height) => {
  return weight - getLeanBody(weight, height);
};

// 표준 체지방량 산출
const getStandardBodyFat = (height, gender) => {
  return getStandardWeight(height, gender) * (gender === MALE ? 0.15 : 0.23);
};

// inbody 점수 산출
// 80점 - (표준 제지방량 - 제지방량) + (표준체지방량 - 체지방량)
export const getInbodyPoint = (weight, height, gender) => {
  const leanBody =
    getStandardLeanBody(height, gender) - getLeanBody(weight, height);
  const bodyFat =
    getStandardBodyFat(height, gender) - getBodyFat(weight, height);
  return Math.round(80 - leanBody + bodyFat);
};

// getLocalStorage
export const getValue = () => {
  const loadedValue = localStorage.getItem(USER_INFO);
  if (loadedValue) {
    return JSON.parse(loadedValue);
  }
  return {};
};

// setLocalStorage
export const saveValue = (value) => {
  localStorage.setItem(USER_INFO, JSON.stringify(value));
};
