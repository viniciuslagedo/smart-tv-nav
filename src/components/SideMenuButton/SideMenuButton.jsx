import React from "react";
import "./SideMenuButton.scss";
const SideMenuButton = props => {
    const { label, icon } = props;
    return (
        <button className="SideMenuButton">
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
        </button>
    );
};

export default SideMenuButton;
