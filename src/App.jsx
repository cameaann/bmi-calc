import "./App.css";
import Hero from "./components/Hero";
import { CssVarsProvider } from "@mui/joy";
import customTheme from "./styles/customTheme";

const App = () => {
  return (
    <>
    <CssVarsProvider theme={customTheme}>
      <Hero />
    </CssVarsProvider>
    </>
  );
};

export default App;
