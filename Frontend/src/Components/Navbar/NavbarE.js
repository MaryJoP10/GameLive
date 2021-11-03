import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    background: black;
    height: 105px;
    width: 100%
    position: fixed;
    justify-content: end;
`


export const NavLink = styled(Link)`
&.active>.button{
    border-radius: 10px;
    transition: 1.2
    box-shadow: 3px 3px 4px #7df8ec;
}

`

