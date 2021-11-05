import {useContext} from "react";
import ThemeContext from "../Contexts/ThemeContext";
import AppTheme from "../Color";
import ThemeToggler from "./ThemeToggler";

const HeroSection=()=>{
    const theme=useContext(ThemeContext)[0];
    const currentTheme=AppTheme[theme];
    
    return (
      <div
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
          padding: "1rem",
          textAlign:"center",
          height:"70vh"
        }}
      >
        <h1>Theme Changer Using context APIs</h1>
        <ThemeToggler/>
       
      </div>
    );


}
export default HeroSection;