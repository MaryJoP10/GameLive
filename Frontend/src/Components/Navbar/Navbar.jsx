import React from 'react';
import {Nav, NavLink} from './NavbarE';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return(
        <>
            <Nav>
                <NavLink to="/Home" activeStyle >
                    <button className= "button" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faHome}/></button>
                </NavLink>
                <NavLink to="/Library" activeStyle>
                    <button className= "button" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faSearch}/></button>
                </NavLink>
                <NavLink to="/Chat" activeStyle>
                    <button className= "button" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faComments}/></button>
                </NavLink>
                <NavLink to="/Signin" activeStyle>
                    <button className= "button" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faUser}/></button>
                </NavLink>
                <NavLink to="/Request" activeStyle>
                    <button className= "button" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faEnvelope}/></button>
                </NavLink>
            </Nav>
        </>
    )
}


export default Navbar

