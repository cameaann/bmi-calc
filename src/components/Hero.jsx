import CalcForm from "./Calc-form";
import logo from "/logo.svg";

const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero-content">
        <a href="#" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
        <h1 className="hero-title">Body Mass Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <CalcForm />
    </div>
  );
};

export default Hero;
