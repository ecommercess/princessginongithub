import Hero from './components/hero';
import AboutMe from './components/aboutMe';
import Navigation from "./components/navigation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (  

    <BrowserRouter>
     <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
