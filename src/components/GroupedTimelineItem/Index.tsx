import { CardItem, CardSubtitle, CardText, CardTitle, getShowColour } from "./styles";
import { ITimelineCardItem } from "./types";


export const TimelineCardItem = ({ cardTitle, cardSubtitle, cardDetailedText }: ITimelineCardItem) => {

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

          <CardSubtitle color={getShowColour(cardSubtitle)}>
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