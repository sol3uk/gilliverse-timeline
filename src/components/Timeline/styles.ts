import styled from "styled-components";

const MOBILE_BREAKPOINT = 768;

export const TimelineWrapper = styled.div`
    background-color: #15151c;
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
    /* In desktop/horizontal mode, the main timeline bar area uses the card background
       colour so cards blend seamlessly into the track */
    .timeline-main-wrapper {
      min-height: 7rem;
      background-color: #20202b;
    }
    /* Outer Chrono wrapper and vertical timeline container: dark page-level background */
    [class*="sc-cif21b-0"],
    [class*="sc-1427v1d-0"] {
      background-color: #15151c;
    }
    /* Fix mobile vertical mode:
       sc-cif21b-1 = TimelineMainWrapper → dark page background
       sc-1427v1d-5 = TimelineTitleWrapper (left date/dot column) → lighter strip only
       sc-d7qjm1-0  = TimelineItemContentWrapper (rc-card) → lighter card box
       sc-1427v1d-1 = VerticalItemWrapper (full row) → transparent, provides spacing only
       sc-1427v1d-3 = TimelineCardContentWrapper → transparent (dark background shows through) */
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      /* Dark page background — card strip must stand out from it */
      [class*="sc-cif21b-1"] {
        background-color: #15151c !important;
      }
      /* Only the left date/dot/connector column (TimelineTitleWrapper) gets the lighter strip */
      [class*="sc-1427v1d-5"] {
        background-color: #20202b;
        min-width: 5.5rem;
        overflow: visible;
      }
      /* Fix date/time labels cut off in mobile vertical mode */
      .timeline-item-title {
        font-size: 0.7rem;
        white-space: normal;
        word-break: break-word;
        text-align: center;
        overflow-wrap: break-word;
      }
      /* Individual card boxes: subtle border so they stand out from the dark background */
      [class*="sc-d7qjm1-0"] {
        border: 1px solid #2e2e3e;
        border-radius: 6px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      }
      /* The green connector line (::after on VerticalCircleWrapper) only covers the
         row height. react-chrono uses no top/bottom on ::after so it gets centred
         inside the flex container; we pin top: 0 and extend by the row gap so there
         are no breaks between rows.
         sc-1427v1d-2 = VerticalCircleWrapper */
      [class*="sc-1427v1d-2"]::after {
        top: 0 !important;
        height: calc(100% + 0.5rem) !important;
      }
    }
    /* rc-card element: lighter background so cards stand out from the dark page colour */
    [class*="sc-d7qjm1-0"] {
      background-color: #20202b !important;
    }
    /* Space vertical rows apart */
    [class*="sc-1427v1d-1"] {
      margin-bottom: 0.5rem;
    }
  `;
