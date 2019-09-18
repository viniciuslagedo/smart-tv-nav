import React from 'react';
import './Trail.scss';
import NavigationContext from '../../contexts/NavigationContext';
import Card from '../Card/Card';
import TreeService from '../../services/TreeService';

class Trail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusKey: props.focusKey,
      keyMap: props.keyMap
    };
  }

  componentDidMount() {
    const { focusKey, keyMap } = this.state;
    TreeService.registerKeyMap(focusKey, keyMap);
  }

  componentDidUpdate() {
    const { activeTarget } = this.context;
    const { focusKey, keyMap } = this.state;
    if (activeTarget !== `${focusKey}-0` && typeof keyMap.left === 'string') {
      const newMap = {
        ...keyMap,
        left: -1
      };
      this.setState({
        keyMap: newMap
      });
      TreeService.registerKeyMap(focusKey, newMap);
    }

    if (activeTarget === `${focusKey}-0` && typeof keyMap.left === 'number') {
      const newMap = {
        ...keyMap,
        left: 'sidemenu'
      };
      this.setState({
        keyMap: newMap
      });
      TreeService.registerKeyMap(focusKey, newMap);
    }

    console.log(TreeService);
    console.log(this.state);
  }

  setTranslateX() {
    const { activeTarget } = this.context;
    const index = activeTarget.split('-')[1];
    const { focusKey } = this.state;

    if (activeTarget.includes(focusKey)) {
      const value = `-${parseInt(index, 10) * 10.4}vw`;
      return `translateX(${value})`;
    }

    return `translateX(0)`;
  }

  render() {
    const { activeTarget } = this.context;
    const { focusKey } = this.state;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div
        className={`Trail ${activeTarget.includes(focusKey) ? 'active' : ''}`}
      >
        <div className="Frame"></div>
        <div
          className="Wrapper"
          style={{
            transform: this.setTranslateX()
          }}
        >
          {arr.map((item, key) => (
            <Card focusPath={`${focusKey}-${key}`} />
          ))}
        </div>
      </div>
    );
  }
}
Trail.contextType = NavigationContext;

export default Trail;
