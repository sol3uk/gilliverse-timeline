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
    grid-template-rows: 20% 80%;
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
    .goHThC {
      padding: 0;
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
  const items: TimelineItemModel[] = [
    {
      title: "Mid 60s",
      cardTitle: "Season 3 Episode 10: Lantern",
      cardSubtitle: "Better Call Saul",
      cardDetailedText: "Opening, Chuck reads to Jimmy from the Mabel book.",
    },
    {
      title: "1973",
      cardTitle: "S2E7 Inflatable",
      cardSubtitle: "Better Call Saul",
      cardDetailedText: "Jimmy sees his father get taken advantage of by a grifter.",
    },
    {
      title: "Late 70s",
      cardTitle: "S4E4 Talk",
      cardSubtitle: "Better Call Saul",
      cardDetailedText: "Mike builds a playground for Matty (stop once it jumps into the flashforward).",
    },
    {
      title: "Early 80s",
      cardTitle: "S1E3 …And the Bag's in the River",
      cardSubtitle: "Breaking Bad",
      cardDetailedText: "Walt and Gretchen talk about the composition of the human body in grad school.",
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
