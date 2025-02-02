import { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Stack } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PartnersSection from "./components/Partners";
import TradersSection from "./components/Traders";
import EvaluationProcess from "./components/Evaluation";
import TradingObjectives from "./components/TradingObjectives";
import ChallengeTable from "./components/ChallengeTable";
import KeyHighlights from "./components/KeyHighlights";
import JoinTeam from "./components/JoinTeam";
import PayoutSystem from "./components/PayoutSystem";
import TradingPlatforms from "./components/TradingPlatforms";
import Footer from "./components/Footer";
import TradingCustomerBenefits from "./components/TradingCustomerBenefits";
import CustomApps from "./components/CustomApps";
import "./App.css";

function App() {
  const [mode, setMode] = useState("dark");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <Navbar toggleTheme={toggleTheme} mode={mode} />
        <div className="gradient-bg">
          <Hero mode={mode} />
        </div>
        <Features />
        <PartnersSection />
        <Stack  justifyContent={'center'} alignItems={"center"}>
          <TradersSection />
        </Stack>
        <EvaluationProcess />
        <TradingObjectives />
        <ChallengeTable />
        <KeyHighlights />
        <JoinTeam />
        <PayoutSystem />
        <TradingPlatforms />
        <TradingCustomerBenefits />
        <CustomApps />
        <Footer />
      </Box>
    </ThemeProvider>
    
  );
}

export default App;
