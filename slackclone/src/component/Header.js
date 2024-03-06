import React from 'react';
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
 
function Header() {
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar alt="User Avatar" src="/path/to/avatar.jpg" />
                <AccessTimeIcon />
            </HeaderLeft>

            {/* Header Search */}
             <HeaderSearch>
             <SearchIcon />
             </HeaderSearch>

            {/* Header Right */}
            
        </HeaderContainer>
    );
};

export default Header;

const HeaderSearch = styled.div`
margin-right: 10px;
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

const HeaderAvatar = styled(Avatar)`
cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;
