import React from "react";

const Button = (props) => {
    return (
        <div className="btn-box">
            <button type="button" style={{ cursor: "pointer" }} className="btn" >{props.children}</button>
        </div>
    );
};

export default Button;