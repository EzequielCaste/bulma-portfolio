import React from 'react';

import './App.scss';
import { MainSection } from './components/MainSection';
import { Navbar } from './components/Navbar';
import { ProjectSection } from './components/ProjectSection';

function App() {
  return (
    <>
    <Navbar />
    <MainSection />
    <ProjectSection />
    </>
  );
}

export default App;
