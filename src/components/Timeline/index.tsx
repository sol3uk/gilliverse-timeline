import { Chrono } from "react-chrono";
import { isMobile } from "react-device-detect";
import { TimelineDateGroups, TimelineDetailItems } from "../../TimelineItems";
import { TimelineCardItem } from "../GroupedTimelineItem/Index";
import { Header } from "../Header";
import { TimelineWrapper } from "./styles";

export const Timeline = () => {
    const TimelineCards = TimelineDetailItems.map(item =>
        <>
            {item.map(({
                id, cardTitle, cardSubtitle, cardDetailedText
            }) =>
                <TimelineCardItem
                    key={id}
                    cardTitle={(cardTitle as string)}
                    cardSubtitle={(cardSubtitle as string)}
                    cardDetailedText={(cardDetailedText as string)}
                />
            )}
        </>
    );
    return (<TimelineWrapper>
        <Header />

        <Chrono items={TimelineDateGroups} scrollable={true} useReadMore={false} mode={isMobile ? "VERTICAL" : "HORIZONTAL"} showAllCardsHorizontal enableOutline cardPositionHorizontal="BOTTOM" theme={{
            primary: '#006d31',
            secondary: '#c1141c',
            cardBgColor: '#20202b',
            cardForeColor: 'white',
            titleColor: 'white',
            titleColorActive: '#fef901'
        }}>
            {TimelineCards}
        </Chrono>
    </TimelineWrapper>);
};