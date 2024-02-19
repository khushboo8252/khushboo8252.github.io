import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import GithubCalender from './component/GitHub';
import Contact from './component/Contact';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Skills/>
    <Projects/>
    <GithubCalender/>
     <Contact/>
  </div>
);

export default App;

