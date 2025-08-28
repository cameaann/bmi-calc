import { Radio, RadioGroup, FormControl, Box, Typography } from "@mui/joy";
import { useState, useEffect } from "react";
import InputField from "./InputField";
import BmiResult from "./BmiResult";
import { useContext } from "react";
import { BMIContext } from "./bmiContext";

const CalcForm = () => {
  const { height, weight, setHeight, setWeight, calculateBMI, setBMI, bmi } =
    useContext(BMIContext);
  const [unit, setUnit] = useState("metric");

  const [imperial, setImperial] = useState({
    feet: "",
    inches: "",
    stones: "",
    pounds: "",
  });

  const [metric, setMetric] = useState({
    height: "",
    weight: "",
  });

  useEffect(() => {
    setMetric({ height: "", weight: "" });
    setImperial({ feet: "", inches: "", stones: "", pounds: "" });
    setHeight(0);
    setWeight(0);
    setBMI(0);
  }, [unit, setHeight, setWeight, setBMI]);

  useEffect(() => {
    let h = 0;
    let w = 0;

    if (unit === "imperial") {
      h = imperial.feet * 30.48 + imperial.inches * 2.54; // cm
      w = imperial.stones * 6.35029 + imperial.pounds * 0.453592; // kg
    } else {
      h = metric.height;
      w = metric.weight;
    }

    setHeight(h);
    setWeight(w);

    if (w && h) {
      calculateBMI();
    }
  }, [imperial, metric, unit, setHeight, setWeight, calculateBMI]);

  return (
    <form className="calc-form">
      <Typography
        level="h3"
        sx={{
          mb: 2,
          textAlign: "left",
          fontSize: "2rem",
          color: "var(--main-text)",
        }}
      >
        {" "}
        Enter your details below{" "}
      </Typography>

      <FormControl>
        <RadioGroup
          orientation="horizontal"
          defaultValue="metric"
          name="radio-buttons-group"
          sx={{ mb: 4, display: "flex" }}
          onChange={(e) => setUnit(e.target.value)}
        >
          {["Metric", "Imperial"].map((label) => (
            <Radio
              key={label}
              value={label.toLowerCase()}
              label={label}
              sx={{
                flexBasis: "50%",
                textAlign: "start",
                fontWeight: "600",
                color: "var(--main-text)",
                fontSize: "1.6rem",
              }}
              size="lg"
            />
          ))}
        </RadioGroup>
      </FormControl>

      {unit === "metric" ? (
        <Box sx={{ display: "flex", gap: 2.5 }}>
          <InputField
            label="Height"
            value={height}
            units="cm"
            onChange={(e) =>
              setMetric({ ...metric, height: Number(e.target.value) })
            }
          />
          <InputField
            label="Weight"
            value={weight}
            units="kg"
            onChange={(e) =>
              setMetric({ ...metric, weight: Number(e.target.value) })
            }
          />
        </Box>
      ) : (
        <>
          <Box sx={{ display: "flex", gap: 2.5 }}>
            <InputField
              label="Height"
              units="ft"
              value={imperial.feet}
              onChange={(e) =>
                setImperial({ ...imperial, feet: Number(e.target.value) })
              }
            />
            <InputField
              label=""
              units="in"
              value={imperial.inches}
              onChange={(e) =>
                setImperial({ ...imperial, inches: Number(e.target.value) })
              }
            />
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            <InputField
              label="Weight"
              units="st"
              value={imperial.stones}
              onChange={(e) =>
                setImperial({ ...imperial, stones: Number(e.target.value) })
              }
            />
            <InputField
              label=""
              units="lbs"
              value={imperial.pounds}
              onChange={(e) =>
                setImperial({ ...imperial, pounds: Number(e.target.value) })
              }
            />
          </Box>
        </>
      )}

      <BmiResult bmi={bmi} height={height} unit={unit} />
    </form>
  );
};

export default CalcForm;
