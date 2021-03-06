import React from "react";
import styled from "styled-components";
import Search from "./search";
import { Region as FilterbyRegion } from "./region";
import Wrapper from "./wrapper";

const ActionListStyled = styled.div`
   .grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
   }
  
`

function ActionList() {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
        <Search />
        <FilterbyRegion />
        </div>
      </Wrapper>
    </ActionListStyled>
  );
}

export default ActionList;
