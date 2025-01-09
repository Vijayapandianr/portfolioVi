import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <section className="projects">
        <h2>Projects</h2>
        <Project title="Project 1" description="This is a description of Project 1." link="#" />
        <Project title="Project 2" description="This is a description of Project 2." link="#" />
      </section>
      <Footer />
    </div>
  );
};

export default App;