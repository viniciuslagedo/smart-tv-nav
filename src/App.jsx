import React from "react";
import "./App.scss";
import SideMenu from "./components/SideMenu/SideMenu";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Home from "./pages/Home";

class App extends React.Component {
    render() {
        return (
            <div id="App" className="App">
                <SideMenu />
                <PageWrapper>{<Home />}</PageWrapper>
            </div>
        );
    }
}

export default App;
