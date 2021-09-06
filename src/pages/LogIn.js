import React from "react";
import Login from "../components/LogIn/LogIn.js";


const LogIn = (props) => {
    const { closeNftCollapse, darkTheme } = props;
    

    return (
        <React.Fragment>
            <div onClick={closeNftCollapse} className="marketplace">
                <Login />
            </div>
        </React.Fragment>
    );
};

export default LogIn;
