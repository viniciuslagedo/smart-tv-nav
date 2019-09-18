import React from "react";
import "./PageWrapper.scss";
class PageWrapper extends React.Component {
    render() {
        const { children } = this.props;
        return <div className="PageWrapper">{children}</div>;
    }
}

export default PageWrapper;
