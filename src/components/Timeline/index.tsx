import React, { useEffect, useRef, useState } from "react";
import { Chrono } from "react-chrono";
import { TimelineDateGroups, TimelineDetailItems } from "../../TimelineItems";
import { ShowGroupHeaderItem, TimelineCardItem } from "../GroupedTimelineItem/Index";
import { Header } from "../Header";
import { SearchBar } from "../SearchBar";
import { TimelineWrapper } from "./styles";

const MOBILE_BREAKPOINT = 768;

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(
        () => window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches
    );
    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);
    return isMobile;
};

export const Timeline = () => {
    const isMobile = useIsMobile();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [activeItemIndex, setActiveItemIndex] = useState<number | undefined>(undefined);

    useEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        const getOutlineButton = (): HTMLElement | null =>
            root.querySelector('[class*="OutlineButton"]');
        const getOutlineWrapper = (): HTMLElement | null =>
            root.querySelector('[class*="OutlineWrapper"]');

        // Use the `open` attribute set by react-chrono for reliable open detection
        const isPanelOpen = (): boolean => {
            const w = getOutlineWrapper();
            return !!w && w.hasAttribute('open');
        };

        // Close the panel by clicking the button.
        // We dispatch a non-trusted synthetic click (isTrusted=false) so our own
        // listener can ignore it, while react-chrono still receives it.
        const closePanel = (): void => {
            if (isPanelOpen()) {
                getOutlineButton()?.click();
            }
        };

        const handleClick = (e: MouseEvent): void => {
            // Ignore synthetic clicks we dispatch via closePanel()
            if (!e.isTrusted) return;

            if (!isPanelOpen()) return;

            const outlineWrapper = getOutlineWrapper();
            const outlineButton = getOutlineButton();
            if (!outlineWrapper) return;

            const target = e.target as Node;

            // The X button is inside the wrapper; let react-chrono handle it
            if (outlineButton && outlineButton.contains(target)) return;

            if (!outlineWrapper.contains(target)) {
                // Clicked anywhere outside the panel – close it
                closePanel();
            } else if ((target as HTMLElement).closest?.('[class*="ListItem"]')) {
                // Clicked a nav list entry – close after react-chrono navigates
                setTimeout(closePanel, 0);
            }
        };

        // Use capture phase so we receive events that react-chrono may stop
        // from bubbling in the main timeline area
        document.addEventListener('click', handleClick, true);
        return () => document.removeEventListener('click', handleClick, true);
    }, []);

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
    return (<TimelineWrapper ref={wrapperRef}>
        <Header />
        <SearchBar onNavigate={(idx) => setActiveItemIndex(idx)} />

        <Chrono items={TimelineDateGroups} scrollable={true} useReadMore={false} mode={isMobile ? "VERTICAL" : "HORIZONTAL"} showAllCardsHorizontal enableOutline cardPositionHorizontal="BOTTOM" activeItemIndex={activeItemIndex} theme={{
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