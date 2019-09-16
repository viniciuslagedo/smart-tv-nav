import React from "react";

const withPageDefaultConfig = WrappedComponent => {
    return class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default withPageDefaultConfig;
