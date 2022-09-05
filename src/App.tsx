import { Chrono } from 'react-chrono';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { ReactComponent as BCSLogo } from './assets/bcs.svg';
import { ReactComponent as BrBaLogo } from './assets/brba.svg';
import { TimelineCardItem } from './components/GroupedTimelineItem/Index';
import { TimelineDetailItems, TimelineItems } from './TimelineItems';


const App = () => {
  const TimelineWrapper = styled.div`
    background-color: #20202b;
    color: white;
    width: 100%;
    height: 100vh;
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
      max-height: 50vh;
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
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
      background-color: #20202b;
      border-radius: 10px;
      button {
        background: transparent;
      }
      ::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
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
      background-color: #20202b;
    }
    .timelinestyle__Wrapper-sc-cif21b-0, .vertical {
      background-color: #15151c;
    }
  `

  const LogoWrapper = styled.div`
    display: flex;
    justify-items: center;
    flex-direction: row;
    align-items: center;
    max-width: 55vw;
    height: 50vh;
    @media (max-width: 900px) { 
      flex-direction: column;
    }
  `

  return (
    <TimelineWrapper>
      <LogoWrapper>
        <BCSLogo />
        <BrBaLogo />
      </LogoWrapper>

      <Chrono
        items={TimelineItems}
        scrollable={true}
        useReadMore={false}
        mode={isMobile ? "VERTICAL" : "HORIZONTAL"}
        showAllCardsHorizontal
        enableOutline
        cardPositionHorizontal="BOTTOM"
        theme={{
          primary: '#006d31',
          secondary: '#c1141c',
          cardBgColor: '#20202b',
          cardForeColor: 'white',
          titleColor: 'white',
          titleColorActive: '#fef901',
        }}>
        {TimelineDetailItems.map((item) => {
          return <>
            {item.map(({ cardTitle, cardSubtitle, cardDetailedText }) => (
              <TimelineCardItem
                cardTitle={cardTitle}
                cardSubtitle={cardSubtitle}
                cardDetailedText={cardDetailedText}
              />
            ))}

          </>

        }
        )}
      </Chrono>
    </TimelineWrapper>

  );
}

export default App;
