import styled from "styled-components";

export const LogoWrapper = styled.div`
display: flex;
justify-items: center;
flex-direction: row;
align-items: center;
max-width: 55vw;
height: 50vh;
@media (max-width: 900px) { 
  flex-direction: column;
}
`;
