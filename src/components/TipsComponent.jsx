import tips from "../tips_arr.json";
import TipCard from "./TipCard";
import { getIcon } from "../func/functions";

const TipsComponent = () => {
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
