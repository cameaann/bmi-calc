import { Typography, Box } from "@mui/joy";

const BmiResult = ({ bmi, height, unit }) => {

  const weight = (bmi) =>
    bmi < 18.5
      ? "underweight"
      : bmi < 24.9
      ? "healthy weight"
      : bmi < 29.9
      ? "overweight"
      : "obesity";

  const idealWeight = (height, unit) => {
    const heightInMeters = unit === "imperial" ? height * 0.0254 : height / 100;

    const minKg = 18.5 * heightInMeters ** 2;
    const maxKg = 24.9 * heightInMeters ** 2;

    if (unit === "imperial") {
      const kgToStLbs = (kg) => {
        const totalLbs = kg * 2.20462;
        const stones = Math.floor(totalLbs / 14);
        const pounds = Math.round(totalLbs % 14);
        return `${stones} st ${pounds} lbs`;
  };
      return `${kgToStLbs(minKg)} – ${kgToStLbs(maxKg)}`;
    } else {
      return `${minKg.toFixed(1)} kgs - ${maxKg.toFixed(1)} kgs`;
    }
  };
  const iw = idealWeight(height, unit);

  return (
    <>
      {!bmi ? (
        <div className="bmi-container">
          <h3>Welcome!</h3>
          <p>
            Enter your height and weight and you'll see your BMI result here
          </p>
        </div>
      ) : (
        <div className="bmi-container bmi-result">
          <div>
            <h3>Your BMI is ...</h3>
            <h1>{bmi}</h1>
          </div>
          <span>
            Your BMI suggests {weight(bmi)}. Your ideal weight is between{" "}
            <b>{iw}</b>
          </span>
        </div>
      )}
    </>
  );
};

export default BmiResult;
