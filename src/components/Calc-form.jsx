

const CalcForm = () => {
  return (
    <form>
		<h1> Enter your details below </h1>

			<div>Metric Imperial Height Weight Your BMI is... Your BMI suggests you're . Your ideal weight is between .</div>


      <input type="number" placeholder="Enter your weight (kg)" />
      <input type="number" placeholder="Enter your height (m)" />
      <button type="submit">Calculate BMI</button>
    </form>
  );
};

export default CalcForm;
