import { Chrono } from 'react-chrono';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { ReactComponent as BCSLogo } from './assets/bcs.svg';
import { ReactComponent as BrBaLogo } from './assets/brba.svg';
import { TimelineItems } from './TimelineItems';

const App = () => {
  const TimelineWrapper = styled.div`
    background-color: #20202b;
    color: white;
    width: 100%;
    height: 100vh;
    display: grid;
    ${isMobile ? 'grid-template-rows: 20% 80%;' : ''}
    align-content: center;
    justify-items: center;
    section{
      min-height: auto;
    }
    .vertical-item-row, .card-content-wrapper, .timeline-card-content {
      min-height: 0;
    }
    .timeline-card-content.rc-card {
      width: 100%;
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
  `
  const LogoWrapper = styled.div`
    display: flex;
    justify-items: center;
    flex-direction: row;
    align-items: center;
    max-width: 55vw;
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
        useReadMore={false}
        mode={isMobile ? "VERTICAL" : "HORIZONTAL"}
        showAllCardsHorizontal
        enableOutline
        itemWidth={100}
        theme={{
          primary: '#006d31',
          secondary: '#c1141c',
          cardBgColor: 'gray',
          cardForeColor: 'white',
          titleColor: 'white',
          titleColorActive: '#fef901',
        }} />
    </TimelineWrapper>

  );
}

export default App;
