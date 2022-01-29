import React from "react";
import './App.scss';
import {ThemeProvider} from "./Contexts/ThemeContext";
import LoginBox from "./Components/LoginBox/LoginBox";
import Header from "./Components/Header/Header";

/* Root Component with ThemeProvider */
function App() {
  return (
    <ThemeProvider> 
      <Header /> 
      <LoginBox />      
    </ThemeProvider> 
  );
}

export default App;
