import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faSearch,
    faUserCircle,
    faBroadcastTower,
    faTags
} from "@fortawesome/free-solid-svg-icons";
import SideMenuButton from "../SideMenuButton/SideMenuButton";
import "./SideMenu.scss";
class SideMenu extends React.Component {
    render() {
        return (
            <div className="SideMenu">
                <div className="Wrapper">
                    <SideMenuButton
                        icon={<FontAwesomeIcon icon={faHome} />}
                        label="Busca"
                    ></SideMenuButton>
                    <SideMenuButton
                        icon={<FontAwesomeIcon icon={faSearch} />}
                        label="Início"
                    ></SideMenuButton>
                    <SideMenuButton
                        icon={<FontAwesomeIcon icon={faBroadcastTower} />}
                        label="Agora na Globo"
                    ></SideMenuButton>
                    <SideMenuButton
                        icon={<FontAwesomeIcon icon={faTags} />}
                        label="Categorias"
                    ></SideMenuButton>
                    <SideMenuButton
                        icon={<FontAwesomeIcon icon={faUserCircle} />}
                        label="Minha Conta"
                    ></SideMenuButton>
                </div>
            </div>
        );
    }
}

export default SideMenu;
