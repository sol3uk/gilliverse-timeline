import styled from "styled-components";

const MOBILE_BREAKPOINT = 768;

export const TimelineWrapper = styled.div`
    background-color: #20202b;
    color: white;
    width: 100%;
    height: 98vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    align-items: center;
    section {
      min-height: auto;
    }
    .timeline-horz-card-wrapper.horizontal {
      border-radius: 4px;
    }
    .timeline-card-content.rc-card {
      width: 100%;
    }
    /* Outline/navigation panel.
       styled-components v5 generates compound class names: displayName-componentId
       (e.g. "timeline-outlinestyles__OutlineWrapper-sc-djcwo8-0"), so we must use
       attribute substring selectors [class*="sc-djcwo8-N"] to match them. */
    [class*="sc-djcwo8-0"] {
      background: #20202b;
      border: 1px solid #3a3a4a;
      border-radius: 10px;
      color: #ddd;
      ::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #20202b;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
    /* OutlineButton (sc-djcwo8-2) – dark background + sticky so it floats with scroll */
    [class*="sc-djcwo8-2"] {
      background: #2a2a3b;
      color: white;
      border: 1px solid #3a3a4a;
      position: sticky;
      top: 0;
      z-index: 1;
    }
    /* Scrollable card content area (sc-cif21b-5 = TimelineContentRender) */
    [class*="sc-cif21b-5"] {
      overflow: auto;
      width: 100%;
      max-height: 66vh;
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #00000000;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
    .timeline-main-wrapper {
      min-height: 7rem;
      background-color: #20202b;
    }
    /* Vertical timeline wrapper and card backgrounds */
    [class*="sc-cif21b-0"],
    [class*="sc-1427v1d-0"] {
      background-color: #15151c;
    }
    /* Fix see-through cards in mobile vertical mode
       sc-1427v1d-1 = VerticalItemWrapper, sc-1427v1d-3 = TimelineCardContentWrapper */
    [class*="sc-1427v1d-1"],
    [class*="sc-1427v1d-3"] {
      background-color: #20202b;
    }
    /* Fix date/time labels cut off in mobile vertical mode
       sc-1427v1d-5 = TimelineTitleWrapper */
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      [class*="sc-1427v1d-5"] {
        min-width: 5.5rem;
        overflow: visible;
      }
      .timeline-item-title {
        font-size: 0.7rem;
        white-space: normal;
        word-break: break-word;
        text-align: center;
        overflow-wrap: break-word;
      }
    }
  `;
