import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { IconButton, InputAdornment, FilledInput} from "@mui/material";
import ThemeVariables from "../../ThemeVariables.scss"; // Global theme variables
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {ThemeContext} from "../../Contexts/ThemeContext";

/* MUI Styled Input */
const StyledFilledInput = styled(FilledInput)(({theme}) => ({
    '& .MuiFilledInput-input': { // Mui classname
        color: ThemeVariables[`${theme}-primary-fg`], // Get primary foreground with theme.
        fontSize: "18px",
        // add your styles here.
    }
}));

/* Export as component */ 
export const ThemedFilledInput = (props) => {
    const { theme } = React.useContext(ThemeContext); /* Get current theme */
    return <StyledFilledInput theme={theme} {...props} />; /* Return themed component and pass props. */
}

/* Themed Password Input */
export const ThemedPasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const { theme } = React.useContext(ThemeContext); /* Get current theme */
    
    const handleClick = () => setShowPassword(!showPassword);

    const styles = {
        IconButton: {
            color: ThemeVariables[`${theme}-primary-fg`], // Get theme color
        }
    }
    
    return (
        <ThemedFilledInput type={showPassword ? "text" : "password"}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        sx={styles.IconButton} 
                        onClick={handleClick} 
                        edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            {...props}>

        </ThemedFilledInput>
    );
}