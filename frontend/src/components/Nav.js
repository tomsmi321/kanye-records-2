import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
    background: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    max-width: 100%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const LogoDiv = styled.div`
    font-size: 1.5rem;
`;

const NavElemContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 7rem;
    justify-content: space-between;
`;


const Nav = () => {
    return (
        <NavContainer>
            <LogoDiv>
                <StyledLink to='/'>&#9834;KANYE RECORDS</StyledLink>
            </LogoDiv>
            <NavElemContainer>
                <p>
                    <StyledLink to='/'>HOME</StyledLink>
                </p>
                <p>
                    <StyledLink to='/about'>ABOUT</StyledLink>
                </p>
            </NavElemContainer>
        </NavContainer>
    )
}



export default Nav; 