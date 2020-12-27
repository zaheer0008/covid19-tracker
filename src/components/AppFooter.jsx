import { blueGrey } from "@material-ui/core/colors";
import React from "react";

const AppFooter = () =>{
    return(
        <div style={{background: '#3f51b5', color: "white",textAlign: 'center', height: '10%'}}>
            <p>Powered by <a style={{color: "white"}} href="https://www.panacloud.ai/">Panacloud</a> </p>
            <p>© Panacloud 2021</p>
        </div>
    )
}

export default AppFooter