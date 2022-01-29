import React from "react";
import "./Header.scss"; // Styles
import CustomSwitch from "./MuiCustomSwitch"; // MUI Switch

/* Header component and theme switcher */
export default function Header() {

    return(
        <header className="Header-AppHeader">
                <span className="Header-HeaderText">Login</span>
                <div className="Header-CustomSwitch">
                    <CustomSwitch /> 
                </div> 
        </header>
    )
}