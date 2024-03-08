import React from "react";
import styled from "styled-components";

const SidebarOption = ({ Icon, title }) => {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannnel>
          <span>#</span> {title}
        </SidebarOptionChannnel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.8;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
    
    color: white;
  }
`;

const SidebarOptionChannnel = styled.div``;
