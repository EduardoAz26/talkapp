import styled from 'styled-components';

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: 120px;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    max-width: 1110;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea"; 
    grid-template-columns: 160px 580px 312px;  
  }
`;

export default MainGrid;