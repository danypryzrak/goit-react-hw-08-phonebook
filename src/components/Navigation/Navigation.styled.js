import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
color: black;
text-decoration: none;

&.active {
    color: tomato;
}
`;

export const StyledUl = styled.ul`
display: flex;
gap: 16px;
list-style: none;
`;