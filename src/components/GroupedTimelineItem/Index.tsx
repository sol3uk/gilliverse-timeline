import styled from "styled-components";
import { ITimelineCardItem } from "./types";

export const TimelineCardItem = ({ cardTitle, cardSubtitle, cardDetailedText }: ITimelineCardItem) => {
  const CardItem = styled.div`
    width: 100%;
  `
  const CardTitle = styled.p`
    color: white;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 0.5em;
    margin: 0.5rem 0;
  `
  const CardSubtitle = styled.p`
    color: rgb(0, 109, 49);
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0 0.5rem;
    margin: 0;
  `
    const CardText = styled.p`
    color: white;
    font-size: 0.85rem;
    font-weight: 400;
    padding: 0 0.5em;
    margin: 0.5rem 0;
  `

  return (
    <CardItem>
      <section>
        <header>
          <CardTitle>
            {
              /* href here for wiki */
            }
            {cardTitle}
          </CardTitle>

          <CardSubtitle>
            {cardSubtitle}
          </CardSubtitle>
        </header>

        <div>
          <CardText>
            {cardDetailedText}
          </CardText>
        </div>
      </section>
    </CardItem>
  );
};
