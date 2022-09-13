import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const TimelineWrapper = styled.div`
    background-color: #20202b;
    color: white;
    width: 100%;
    height: 98vh;
    display: flex;
    flex-direction: column;
    ${isMobile ? 'grid-template-rows: 20% 80%;' : ''}
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
    .timelinestyle__TimelineContentRender-sc-cif21b-5 {
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
    .timeline-outlinestyles__OutlineWrapper-sc-djcwo8-0 {
      -webkit-animation: none;
      background-color: #00000000;
      border-radius: 10px;
      button {
        background: transparent;
      }
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
    .timeline-main-wrapper {
      min-height: 7rem;
      background-color: #20202b;
    }
    .timelinestyle__Wrapper-sc-cif21b-0, .vertical {
      background-color: #15151c;
    }
  `;
