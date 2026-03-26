import React from "react";
import { Chrono } from "react-chrono";
import { isMobile } from "react-device-detect";
import { TimelineDateGroups, TimelineDetailItems } from "../../TimelineItems";
import { ShowGroupHeaderItem, TimelineCardItem } from "../GroupedTimelineItem/Index";
import { Header } from "../Header";
import { TimelineWrapper } from "./styles";

export const Timeline = () => {
    const TimelineCards = TimelineDetailItems.map((dateGroup, groupIdx) => {
        // Group consecutive items by show title within each date group
        const showGroups: { show: string; items: typeof dateGroup }[] = [];
        const showMap = new Map<string, typeof dateGroup>();
        const showOrder: string[] = [];

        for (const item of dateGroup) {
            const show = item.cardSubtitle as string;
            if (!showMap.has(show)) {
                showMap.set(show, []);
                showOrder.push(show);
            }
            showMap.get(show)!.push(item);
        }

        for (const show of showOrder) {
            showGroups.push({ show, items: showMap.get(show)! });
        }

        return (
            <React.Fragment key={groupIdx}>
                {showGroups.map(({ show, items }) => (
                    <React.Fragment key={show}>
                        <ShowGroupHeaderItem show={show} />
                        {items.map(({ id, cardTitle, cardDetailedText }) => (
                            <TimelineCardItem
                                key={id}
                                cardTitle={(cardTitle as string)}
                                cardDetailedText={(cardDetailedText as string)}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    });
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