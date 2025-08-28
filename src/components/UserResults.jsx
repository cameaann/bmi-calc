import manImage from "../assets/images/image-man-eating.webp";
import leftLine from "../assets/images/pattern-curved-line-left.svg";
import { BMIContext } from "./bmiContext";
import { useContext } from "react";
import { getBMIResult } from "../func/functions";

const UserResults = () => {
  const { bmi } = useContext(BMIContext);
  const resultText = bmi ? getBMIResult(bmi) : '';

  return (
    <section className="container result-section">
      <img src={leftLine} alt="" className="left-line" />
      <picture>
        <img src={manImage} alt="Man eating" className="man" />
      </picture>

      <div>
        <h2 className="section-title">What your BMI result means</h2>
        <p className="result-description">
          {resultText}
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};

export default UserResults;
