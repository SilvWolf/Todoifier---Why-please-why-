import "./Divider.scss";
import React from 'react';

function Divider(){
    return React.createElement(
        "div",
        { className: "Divider" },
        React.createElement("hr")
    );
}

export default Divider;