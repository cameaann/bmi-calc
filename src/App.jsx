import "./App.css";
import Hero from "./components/Hero";
import { CssVarsProvider } from "@mui/joy";
import customTheme from "./styles/customTheme";
import UserResults from "./components/UserResults";

const App = () => {
  return (
    <>
    <CssVarsProvider theme={customTheme}>
      <Hero />
      <UserResults />
    </CssVarsProvider>
    </>
  );
};

export default App;
