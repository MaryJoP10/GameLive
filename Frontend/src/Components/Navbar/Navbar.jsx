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
                    <button className= "buttonN" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faSearch}/></button>
                </NavLink>
                <NavLink to="/chat" activeStyle className="d">
                    <button className= "buttonN" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faComments}/></button>
                </NavLink>
                <NavLink to="/signin" activeStyle className="t">
                    <button className= "buttonN" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faUser}/></button>
                </NavLink>
                <NavLink to="/request" activeStyle className="c">
                    <button className= "buttonN" type='button'><FontAwesomeIcon style={{fontSize:"22px"}}className= "icon" icon= {faEnvelope}/></button>
                </NavLink>
            </Nav>
        </>
    )
}

export const Nav = styled.nav`
    width: 100%;
    background-color: black;
    height: 105px;
    display: flex;
    justify-content: end;
`


export const NavLink = styled(Link)`
&.active>.buttonN{
    border-radius: 10px;
    transition: 1.2;
    border-color: #fccbcb;
    .icon{
        color: #fccbcb;
    }
}
`

export default Navbar

