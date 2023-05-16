import './App.css';
import MainCard from './MainCard';
import RoadCard from './RoadCard';
import GarbageCard from './GarbageCard'
import {Route, Routes} from 'react-router-dom'
import PollutionCard from './PollutionCard';
import NotFoundCard from './NotFoundCard';
import Navbar from './Navigation'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <div className='header'>Waste Analytics using Sentiment Analysis of Clean India Tweets</div>

   

    <Navbar/>
    <Routes>

      <Route path='/' element={<MainCard/>} />
      <Route path='/road' element={<RoadCard/>} />
      <Route path='/garbage' element={<GarbageCard/>} />
      <Route path='/pollution' element={<PollutionCard/>} />
      <Route path='*' element={<NotFoundCard/>} />
    </Routes>
      
    </div>
  );
}

export default App;
