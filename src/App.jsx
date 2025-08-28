import "./App.css";
import Hero from "./components/Hero";
import { CssVarsProvider } from "@mui/joy";
import customTheme from "./styles/customTheme";
import UserResults from "./components/UserResults";
import TipsComponent from "./components/TipsComponent";
import Limitations from "./components/Limitations";
import { BMIProvider } from "./components/bmiProvider";

const App = () => {
  return (
    <>
    <CssVarsProvider theme={customTheme}>
      <BMIProvider>
        <Hero />
        <UserResults />
        <TipsComponent />
        <Limitations />
      </BMIProvider>
    </CssVarsProvider>
    </>
  );
};

export default App;
