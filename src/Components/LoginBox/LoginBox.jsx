import React,{useContext} from "react";
import './LoginBox.scss'; /* LoginBox styles */
import { ThemedFilledInput, ThemedPasswordInput } from "../ThemedComponents/StyledInput";
import {ThemedButton} from "../ThemedComponents/StyledButton";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {ThemeContext} from "../../Contexts/ThemeContext";

export default function LoginBox() {
    const {theme} = useContext(ThemeContext);
   
    return (
        <div className="LoginBox-LoginBox">
            <AccountCircleIcon className="LoginBox-AccountIcon" sx={{fontSize:"4.5em"}} /> 
            <ThemedFilledInput placeholder="Username" variant="filled" />
            <ThemedPasswordInput placeholder="Password" variant="filled" />
             <ThemedButton variant="filled">
                <VpnKeyIcon className={theme === 'dark' ? "LoginBox-LoginButtonIconDark" : "LoginBox-LoginButtonIcon"} />
                <span className="LoginBox-LoginButtonText">Let me in</span>
            </ThemedButton>
        </div>
    );
}