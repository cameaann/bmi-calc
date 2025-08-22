import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  label: {
    color: "var(--grey-text) !important",
    fontWeight: "400 !important",
    fontSize: "1.4rem !important",
  },
  input: {
    marginBottom: 1,
    fontSize: "2.2rem !important",
    padding: "1rem 2rem !important",
    borderRadius: "12px !important",
    borderColor: "var(--grey-text) !important",
    color: "var(--grey-text) !important",
    fontWeight: "500 !important",
  },
  endDecorator: {
    color: "var(--primary-color) !important",
    fontWeight: "bold !important",
    fontSize: "2.2rem !important",
  },
}));

export default function InputField({ label, units = "", onChange, value }) {
  const classes = useStyles();
  return (
    <FormControl sx={{ width: "48%" }}>
      <FormLabel className={classes.label}>{label ? label : <br />}</FormLabel>
      <Input
        placeholder="0"
        onChange={onChange}
        size="lg"
        className={classes.input}
		value={value}
        endDecorator={
          <Typography className={classes.endDecorator}>{units}</Typography>
        }
      />
    </FormControl>
  );
}
