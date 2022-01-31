import { Button } from "@mui/material";
import React, { useContext } from "react";
import Basic from "./Basic";
import { ThemeContext } from "../App";



const Auth = () =>{
    const {isAuth,users} = useContext(ThemeContext) 
    return(
        <> 
            <Button>now i am not working </Button>
            <Basic></Basic>
        </>
    )
}
export default Auth;