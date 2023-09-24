import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from './componenet/home/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Cursor from './componenet/Cursor';


function App() {
  const [scaling, setScaling] = useState(0)

  const onMenter = () => {
    console.log("en");
    setScaling(true);
  }

  const onMleave = () => {
    console.log("lv");
    setScaling(false);
  }


  return (
    <>        
      <Router>
        <Cursor scaling={scaling}/>
        <Header onMenter={onMenter} onMleave={onMleave}/>
        <Routes>
        <Route path="/" element={<Home onMenter={onMenter} onMleave={onMleave}/>} />
        <Route path="/about" element={<About onMenter={onMenter} onMleave={onMleave}/>} />
        <Route path="/projects" element={<Projects onMenter={onMenter} onMleave={onMleave}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
