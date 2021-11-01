import React from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Images/Logo.png'
import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
                    
const Navbar = () => {
    return(
        <>
            <Nav>
                <NavLink to="/" activeStyle>
                <img className="Logo" src={logo} alt="GameLiveLogo"></img>
                </NavLink>
                <NavLink to="/library" activeStyle className="u"> 
                    <button className= "button" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faSearch}/></button>
                </NavLink>
                <NavLink to="/chat" activeStyle className="d">
                    <button className= "button" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faComments}/></button>
                </NavLink>
                <NavLink to="/signin" activeStyle className="t">
                    <button className= "button" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faUser}/></button>
                </NavLink>
                <NavLink to="/request" activeStyle className="c">
                    <button className= "button" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faEnvelope}/></button>
                </NavLink>
            </Nav>
        </>
    )
}

export const Nav = styled.nav`
    background: black;
    height: 105px;
    width: 100%;
    z-index: 100px;
`


export const NavLink = styled(Link)`
&.active>.button{
    border-radius: 10px;
    width: 150px;
    height: 50px;
    transition: 1.2
}

`


export default Navbar

