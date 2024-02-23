 import './App.css';
 import React, {useState} from 'react';
 import Navbar from './components/Navbar/Navbar';
 import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import ByTheNumber from './components/ByTheNumbers/ByTheNumber';
import StayUpToDate from './components/StayUpToDate/StayUpToDate';
import OurProducts from './components/OurProducts/OurProducts';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };
  return (
 
    <div className={darkMode ? 'dark' : ''}>
       <Navbar/>
       <OurProducts/>
       <ByTheNumber/>
       <StayUpToDate/>
      <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />
    </div>
  );
}

export default App;
