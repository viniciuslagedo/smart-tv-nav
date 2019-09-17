import React from "react";
import "./SideMenuButton.scss";
import withFocusable from "../withFocusable/withFocusable";

let SideMenuButton = props => {
    const { label, icon, focused } = props;
    return (
        <button className={`SideMenuButton ${focused ? "active" : ""}`}>
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
        </button>
    );
};

export default SideMenuButton = withFocusable(SideMenuButton);
