import React from 'react';
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
 
function Header() {
    return (
        <HeaderContainer>
            
            <HeaderLeft>
                <HeaderAvatar alt="User Avatar" src="/path/to/avatar.jpg" />
                <AccessTimeIcon />
            </HeaderLeft>

            
             <HeaderSearch>
             <SearchIcon />
             <input type="search" placeholder='search' />
             </HeaderSearch>

             
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
            
        </HeaderContainer>
    );
};

export default Header;

const HeaderSearch = styled.div`
flex: 0.5;
opacity: 1;
background-color: #421f44;
border-radius: 6px;
text-align: center;
display: flex;
padding: 0 50px;
color: gray;
border: 1px solid gray;

> input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
}

`;


const HeaderContainer = styled.div`
display: flex;
position: fixed;
align-items: center;
width: 100%;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color); 
color: white;
`;

const HeaderLeft = styled.div`
 flex: 0.3;
 display: flex;
 align-items: center;
 margin-left: 20px;
 


 > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}

`;


const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}
`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;

    :hover {
        opacity: 0.8;   
    }
`;
