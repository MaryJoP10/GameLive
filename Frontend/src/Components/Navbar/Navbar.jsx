import React, {useStates} from "react";
import "./Navbar.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="Navbar">
            <button class= "button" onClick={this.onItemClick}><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faHome}/></button>
            <button class= "button" ><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faSearch}/></button>
            <button class= "button" ><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faComments}/></button>
            <button class= "button" ><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faUser}/></button>
            <button class= "button" ><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faEnvelope}/></button>
        </div>
       
    )
    
}
 onItemClick = (path) => {
        this.setState({ activePath: path });
        }

export default Navbar

