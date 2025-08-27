import { Grid } from "@mui/joy";
import LimitCard from "./LimitCard";
import limits from "../limits.json";
import { getIcon } from "../func/functions";
import rightLine from "../assets/images/pattern-curved-line-right.svg";

const Limitations = () => {
  return (
    <section className="container">
      <Grid container justifyContent={{ xs: "center", md: "start" }} spacing={{xs: 0, sm: 3.5}} rowSpacing={2}>
        <Grid item size={{ sx: 12, md: 8 }} sx={{ marginRight: { sm: "0", md: "10rem" }, padding: { sm: "1rem"} }}>
          <div className="limit-description">
            <h1 className="section-title">Limitations of BMI</h1>
            <p>
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
        </Grid>
        {limits.map((val, index) => (
          <>
            {index === 1 ? (
              <Grid item size={3} sx={{ width: { md: "25rem", lg: "35rem" }, display: { xs: "none", md: "block" } }}>
                {" "}
                <img src={rightLine} alt="" />
              </Grid>
            ) : null}
            {index === 3 ? (
              <Grid item size={3} sx={{ width: "20rem", display: { xs: "none", md: "block" }  }}></Grid>
            ) : null}
            <Grid item key={index} size={3} justifyItems="end">
              <LimitCard limit={val} icon={getIcon(val.icon)} />
            </Grid>
          </>
        ))}
      </Grid>
    </section>
  );
};

export default Limitations;
