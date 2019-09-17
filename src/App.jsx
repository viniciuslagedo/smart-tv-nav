import React from 'react';
import './App.scss';
import SideMenu from './components/SideMenu/SideMenu';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Home from './pages/Home';
import NavigationContext from './contexts/NavigationContext';
import TreeService from './services/TreeService';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTarget: 'sidemenu-1'
    };
    this.navigate.bind(this);
  }

  navigate(direction) {
    const tree = TreeService.getTree();
    const { activeTarget } = this.state;
    const config = activeTarget.split('-');
    const key = config[0];
    const keyMap = TreeService.getKeyMap(key);

    if (!keyMap[direction] || typeof keyMap[direction] === null) {
      return;
    }

    if (typeof keyMap[direction] === 'number') {
      const index = parseInt(config[1], 10) + keyMap[direction];
      if (
        tree[key] &&
        tree[key].items &&
        (index >= 0 && index < Object.keys(tree[key].items).length)
      ) {
        this.setState({
          activeTarget: `${key}-${index}`
        });
      }
    }

    if (typeof keyMap[direction] === 'string') {
      this.setState({
        activeTarget: `${keyMap[direction]}-0`
      });
    }
  }

  render() {
    return (
      <NavigationContext.Provider value={this.state}>
        <div id="App" className="App">
          <SideMenu focusKey="sidemenu" />
          <PageWrapper>{<Home />}</PageWrapper>
        </div>
        <div className="ClickNavigation">
          {<button onClick={() => this.navigate('left')}>Left</button>}
          {<button onClick={() => this.navigate('up')}>Up</button>}
          {<button onClick={() => this.navigate('down')}>Down</button>}
          {<button onClick={() => this.navigate('right')}>Right</button>}
        </div>
      </NavigationContext.Provider>
    );
  }
}

export default App;
