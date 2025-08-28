import iconSleep from "../assets/images/icon-sleep.svg";
import iconFood from "../assets/images/icon-eating.svg";
import iconExercise from "../assets/images/icon-exercise.svg";
import iconGender from "../assets/images/icon-gender.svg";
import iconAge from "../assets/images/icon-age.svg";
import iconMuscle from "../assets/images/icon-muscle.svg";
import iconPregnancy from "../assets/images/icon-pregnancy.svg";
import iconRace from "../assets/images/icon-race.svg";


const iconMap = {
  Sleep: iconSleep,
  Food: iconFood,
  Exercise: iconExercise,
  Gender: iconGender,
  Age: iconAge,
  Muscle: iconMuscle,
  Pregnancy: iconPregnancy,
  Race: iconRace,
};

export const getIcon = (name) => iconMap[name] || '';

const BMI_CATEGORIES = {
  UNDERWEIGHT: 'A BMI range of under 18.5 is considered a "underweight". ',
  NORMAL: 'A BMI range of 18.5 to 24.9 is considered a "healthy weight". ',
  OVERWEIGHT: 'A BMI range of 25 to 29.9 is considered "overweight". ',
  OBESE: 'A BMI of 30 or greater is considered "obese". ',
};

export const getBMIResult = (bmi) => {
  switch (true) {
    case bmi < 18.5:
      return BMI_CATEGORIES.UNDERWEIGHT;
    case bmi < 24.9:
      return BMI_CATEGORIES.NORMAL;
    case bmi < 29.9:
      return BMI_CATEGORIES.OVERWEIGHT;
    default:
      return BMI_CATEGORIES.OBESE;
  }
};
