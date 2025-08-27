import manImage from "../assets/images/image-man-eating.webp";
import leftLine from "../assets/images/pattern-curved-line-left.svg";

const UserResults = () => {
  return (
    <section className="container result-section">
      <img src={leftLine} alt="" className="left-line" />
      <picture>
        <img src={manImage} alt="Man eating" className="man" />
      </picture>

      <div>
        <h1 className="section-title">What your BMI result means</h1>
        <p className="result-description">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
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
