import tips from "../tips_arr.json";
import iconSleep from "../assets/images/icon-sleep.svg";
import iconFood from "../assets/images/icon-eating.svg";
import iconExercise from "../assets/images/icon-exercise.svg";
import TipCard from "./TipCard";

const TipsComponent = () => {
  const getIcon = (name) =>
    name === "Sleep" ? iconSleep : name === "Food" ? iconFood : iconExercise;
  return (
    <section className="container">
        <ul className="tips-container">
          {tips.map((tip, index) => (
            <TipCard key={index} tip={tip} icon={getIcon(tip.icon)}/>
          ))}
        </ul>
    </section>
  );
};

export default TipsComponent;
