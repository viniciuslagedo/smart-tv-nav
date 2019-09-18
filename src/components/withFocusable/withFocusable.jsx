import React from 'react';
import ReactDOM from 'react-dom';

import NavigationContext from '../../contexts/NavigationContext';
import TreeService from '../../services/TreeService';

const withFocusable = WrappedComponent => {
  class WithFocusable extends React.Component {
    constructor() {
      super();
      this.state = {
        focused: false
      };
    }

    componentDidMount() {
      //adicionar na tree
      this.registerOnTree();
      this.setFocused();
    }

    componentDidUpdate() {
      this.setFocused();
    }

    componentWillUnmount() {
      //remove da tree
    }

    setFocused() {
      const { focused } = this.state;
      const { focusPath } = this.props;
      const { activeTarget } = this.context;
      if (focusPath === activeTarget && !focused) {
        this.setState({
          focused: focusPath === activeTarget
        });
      }

      if (focusPath !== activeTarget && focused) {
        this.setState({
          focused: focusPath === activeTarget
        });
      }
    }

    registerOnTree() {
      const { focusPath } = this.props;
      const { registerTreeFocusElement } = this.context;
      const config = focusPath.split('-');
      const key = config[0];
      const index = String(config[1]);
      const element = ReactDOM.findDOMNode(this);
      TreeService.registerTreeItem(key, index, element);
    }

    render() {
      const { focused } = this.state;
      return <WrappedComponent focused={focused} {...this.props} />;
    }
  }
  WithFocusable.contextType = NavigationContext;
  return WithFocusable;
};

export default withFocusable;
