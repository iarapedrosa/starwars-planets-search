import React from 'react';
import './App.css';
import FiltersHeader from './components/FiltersHeader';
import Table from './components/Table';
import StarwarsProvider from './context/StarwarsProvider';
import topo from './images/grafismo-topo.svg';

function App() {
  return (
    <section className="background">
      <div className="grafismo">
        <img src={ topo } alt="grafismo do topo" />
      </div>
      <StarwarsProvider>
        <FiltersHeader />
        <Table />
      </StarwarsProvider>
    </section>
  );
}

export default App;
