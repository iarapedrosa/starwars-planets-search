import React from 'react';
import './App.css';
import FiltersHeader from './components/FiltersHeader';
import Table from './components/Table';
import StarwarsProvider from './context/StarwarsProvider';
import topo from './images/grafismo-topo.svg';

function App() {
  return (
    <section>
      <div className="grafismo">
        <img src={ topo } alt="grafismo do topo" />
      </div>
      <StarwarsProvider>
        <div className="tableBox">
          <FiltersHeader />
          <Table />
        </div>
      </StarwarsProvider>
    </section>
  );
}

export default App;
