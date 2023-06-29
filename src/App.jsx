import { useState } from 'react';
import './App.css'

import FeatchWeather from './Components/API/WeatherApi';
import Header from './Components/Header/Header';
import Table from './Components/Table/Table';

function App() {

  const [Data, setData] = useState(null);

  return (
    <>
      <h1>WEATHER WHISPERS :  Keeping You Ahead Of Nature's Rythm :)</h1>
      {
        Data &&
        <>
          <Header HeadData={Data} />
          <Table ExtData={Data} />
        </>
      }
      <FeatchWeather GetData={(data) => setData(data)} />
    </>
  )
}

export default App
