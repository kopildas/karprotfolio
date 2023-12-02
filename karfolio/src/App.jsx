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
import Cursor from './componenet/Cursor';
import Project_1 from './componenet/projects/pro1/Project_1/Project_1';
import Pie_Project from './pages/Project/Pie_Project';
import Backstore_project from './pages/Project/Backstore_project';
import Contact from './pages/Contact';


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
        <Route path="/contact" element={<Contact onMenter={onMenter} onMleave={onMleave}/>} />
        <Route path="/project/1" element={<Pie_Project onMenter={onMenter} onMleave={onMleave}/>} />
        <Route path="/project/2" element={<Backstore_project onMenter={onMenter} onMleave={onMleave}/>} />
        {/* <Route path="/project/3" element={<Projects onMenter={onMenter} onMleave={onMleave}/>} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
