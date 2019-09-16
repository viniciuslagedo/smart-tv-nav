import React from "react";
import "./App.scss";
import SideMenu from "./components/SideMenu/SideMenu";

class App extends React.Component {
    render() {
        return (
            <div id="App" className="App">
                <SideMenu></SideMenu>
            </div>
        );
    }
}

export default App;
