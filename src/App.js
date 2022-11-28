import { useState, useEffect } from 'react'
import { getTheaters, getDay, getBillboard } from './actions';
import Plays from './components/Plays';
import './App.css';

function App() {
  const [theaters, setTheaters] = useState([])
  const [currentDay, setCurrentDay] = useState(0)
  const [billboard, setBillboard] = useState([])

  useEffect(() => {
    setTheaters(getTheaters)
    setCurrentDay(getDay)
    setBillboard(getBillboard)
  }, [])

  return (
    <div className="App">
      {
        theaters && 
        theaters.length && 
        billboard && 
        billboard.length && 
        <Plays theaters={theaters} billboard={billboard} currentDay={currentDay} />  
      }
    </div>
  );
}

export default App;
