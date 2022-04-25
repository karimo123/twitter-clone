import React from 'react';
import "./sidebaroption.css"

const Sidebaroption = ({active, text, Icon}) => {
    let sideBarOptionActive = ""
    if(active){
        sideBarOptionActive = "sidebarOption--active"
    } 
    // ${active && sidebarOption--active }
    return (
        <div className={`sidebarOption ${sideBarOptionActive}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default Sidebaroption;
