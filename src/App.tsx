import { Chrono } from 'react-chrono';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';
import styled from 'styled-components';
import './App.css';
import { ReactComponent as BCSLogo } from './assets/bcs.svg';
import { ReactComponent as BrBaLogo } from './assets/brba.svg';

const App = () => {
  const TimelineWrapper = styled.div`
    background-color: #20202b;
    color: white;
    width: 100%;
    height: 100vh;
    display: grid;
    align-content: center;
    justify-items: center;
    section{
      min-height: auto;
    }
    .fdCotd {
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
    max-width: 60vw;
  `
  const items: TimelineItemModel[] = [
    {
      title: "Mid 60s",
      cardTitle: "S3E10 Lantern",
      cardDetailedText: "Opening, Chuck reads to Jimmy from the Mabel book.",
    },
    {
      title: "1973",
      cardTitle: "S2E7 Inflatable",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Jimmy sees his father get taken advantage of by a grifter.",
    },
  ];

  return (
    <TimelineWrapper>
      <LogoWrapper>
        <BCSLogo />
        <BrBaLogo />
      </LogoWrapper>

      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        enableOutline
        theme={{
          primary: '#c1141c',
          secondary: '#fef901',
          cardBgColor: 'gray',
          cardForeColor: 'white',
          titleColor: 'white',
          titleColorActive: '#c1141c',
        }} />
    </TimelineWrapper>

  );
}

export default App;
