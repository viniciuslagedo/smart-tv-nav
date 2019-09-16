import React from "react";
import withPageDefaultConfig from "./withPageDefaultConfig";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home = withPageDefaultConfig(Home);
