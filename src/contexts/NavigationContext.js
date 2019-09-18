import React from "react";

const NavigationContext = React.createContext({
    activeTarget: "menu-1",
    tree: {} // Tentar incrementar tree a cada componente
});

export default NavigationContext;
