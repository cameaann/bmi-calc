import "./App.css";
import Hero from "./components/Hero";
import { CssVarsProvider } from "@mui/joy";
import customTheme from "./styles/customTheme";
import UserResults from "./components/UserResults";
import TipsComponent from "./components/TipsComponent";
import Limitations from "./components/Limitations";

const App = () => {
  return (
    <>
    <CssVarsProvider theme={customTheme}>
      <Hero />
      <UserResults />
      <TipsComponent />
      <Limitations />
    </CssVarsProvider>
    </>
  );
};

export default App;
