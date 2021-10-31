import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

`


export const NavLink = styled(Link)`
&.active>.button{
    border-radius: 10px;
    width: 150px;
    height: 50px;
    transition: 1.2
}

`

