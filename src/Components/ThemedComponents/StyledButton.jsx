import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import ThemeVariables from "../../ThemeVariables.scss";
import { ThemeContext } from "../../Contexts/ThemeContext";

/* Styled button */
const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor: ThemeVariables[`${theme}-primary-fg`],
    color: ThemeVariables[`${theme}-primary-bg`],
    '&:hover': {
        backgroundColor: ThemeVariables[`${theme}-primary-fg-focus`],
    }
}));

export const ThemedButton = (props) => {
    const {theme} = React.useContext(ThemeContext);
    return ( <StyledButton theme={theme} {...props}/> ); // Return themed button.
}