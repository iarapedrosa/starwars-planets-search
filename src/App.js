import React from 'react';
import './App.css';
import FiltersHeader from './components/FiltersHeader';
import Table from './components/Table';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <FiltersHeader />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
