import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faUserCircle,
  faBroadcastTower,
  faTags
} from '@fortawesome/free-solid-svg-icons';
import SideMenuButton from '../SideMenuButton/SideMenuButton';
import './SideMenu.scss';
import NavigationContext from '../../contexts/NavigationContext';
import TreeService from '../../services/TreeService';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusKey: props.focusKey,
      keyMap: {
        up: -1,
        down: 1,
        right: 'destaque'
      }
    };
  }

  componentDidMount() {
    const { focusKey, keyMap } = this.state;
    TreeService.registerKeyMap(focusKey, keyMap);
    console.log(TreeService);
  }

  render() {
    const { activeTarget } = this.context;
    const { focusKey } = this.state;
    return (
      <div
        className={`SideMenu ${
          activeTarget.includes(focusKey) ? 'active' : ''
        }`}
      >
        <div className="Wrapper">
          <SideMenuButton
            icon={<FontAwesomeIcon icon={faSearch} />}
            label="Busca"
            focusPath={`${focusKey}-0`}
          ></SideMenuButton>
          <SideMenuButton
            icon={<FontAwesomeIcon icon={faHome} />}
            label="Início"
            focusPath={`${focusKey}-1`}
          ></SideMenuButton>
          <SideMenuButton
            icon={<FontAwesomeIcon icon={faBroadcastTower} />}
            label="Agora na Globo"
            focusPath={`${focusKey}-2`}
          ></SideMenuButton>
          <SideMenuButton
            icon={<FontAwesomeIcon icon={faTags} />}
            label="Categorias"
            focusPath={`${focusKey}-3`}
          ></SideMenuButton>
          <SideMenuButton
            icon={<FontAwesomeIcon icon={faUserCircle} />}
            label="Minha Conta"
            focusPath={`${focusKey}-4`}
          ></SideMenuButton>
        </div>
      </div>
    );
  }
}
SideMenu.contextType = NavigationContext;

export default SideMenu;
