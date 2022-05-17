import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  padding: 0 50px; 
  div {  
    align-self: center; 
    min-height: 30px; 
    p.tal { 
      text-align: center; 
      width: 100%; 
      min-height: 50px; 
    } 
  } 
  img {
      width: 150px;
      margin: -47px 0 0 0;
      position: absolute;
  }
`;

export default HeaderWrapper
