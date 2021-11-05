import React,{useContext} from "react";
import ThemeContext from "../Contexts/ThemeContext";
import AppTheme from "../Color";

const ThemeToggler=()=>{
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    const [themeMode,setThemeMode]=useContext(ThemeContext);
    return (
      // <div style={{cursor:"pointer"}}
      //   onClick={() => {
      //     setThemeMode(themeMode === "light" ? "dark" : "light");
      //   }}
      // >
      //   <span>{themeMode=== "light"?"turn off":"on lights"}</span>
      // </div>
      <button
        onClick={() => {
         setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
        style={{
          backgroundColor: "magenta",
          fontSize: "20px",
          color: "#fff",
          padding: "10px 100px",
          borderColor: `${currentTheme.border}`,
          cursor:"pointer"
        }}
      >
        Click Me
      </button>
    );


}
export default ThemeToggler;