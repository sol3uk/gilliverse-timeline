import { CardItem, CardText, CardTitle, ShowGroupHeader, getShowColour } from "./styles";
import { ITimelineCardItem } from "./types";

export const ShowGroupHeaderItem = ({ show }: { show: string }) => {
  return (
    <ShowGroupHeader color={getShowColour(show)}>
      {show}
    </ShowGroupHeader>
  );
};

export const TimelineCardItem = ({ cardTitle, cardDetailedText }: ITimelineCardItem) => {

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