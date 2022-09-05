import styled from "styled-components";

export function getShowColour(cardSubtitle: string) {
  switch (cardSubtitle) {
    case 'Better Call Saul':
      return `background: linear-gradient(180deg, rgba(246,236,39,1) 0%, rgba(237,28,61,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`;
    case 'Breaking Bad':
      return `color: rgb(0, 109, 49);`;
    default:
      return `color: white;`;
  }
}
export const CardItem = styled.div`
    width: 100%;
  `;
export const CardTitle = styled.p`
    color: white;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 0.5em;
    margin: 0.5rem 0;
  `;
export const CardSubtitle = styled.p`
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0 0.5rem;
    margin: 0;
    
    ${props => props.color}
  `;
export const CardText = styled.p`
    color: white;
    font-size: 0.85rem;
    font-weight: 400;
    padding: 0 0.5em;
    margin: 0.5rem 0;
  `;
