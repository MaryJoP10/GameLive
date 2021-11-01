import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: black;
    height: 105px;
    widht: 100%
`


export const NavLink = styled(Link)`
&.active>.button{
    border-radius: 10px;
    width: 150px;
    height: 50px;
    transition: 1.2
}

`

