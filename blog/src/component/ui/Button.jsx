import React from 'react';
import styled from 'styled-components'

const StyledButton=styled.button`
   padding: 8px 16px;
   font-size: 16px;
   border: none;
   border-radius: 8px;
   cursor:pointer;
   background:green;
   color: #fff;
`;
const Button = (props) => {
   const {title, onClick} = props;
   return (
      <StyledButton onClick={onClick}>
         {title || "button"}
      </StyledButton>
   );
};

export default Button;