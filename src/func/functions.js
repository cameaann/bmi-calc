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