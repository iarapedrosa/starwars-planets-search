import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);

  const [filterByName, setFilterByName] = useState({ name: '' });

  const [filterByNumber, setFilterByNumber] = useState([]);

  const [actualNumberFilter, setActualNumberFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [planetsFiltered, setPlanetsFiltered] = useState([]);

  const contextData = {
    data,
    setData,
    filterByName,
    setFilterByName,
    filterByNumber,
    setFilterByNumber,
    planetsFiltered,
    setPlanetsFiltered,
    actualNumberFilter,
    setActualNumberFilter,
  };

  return (
    <StarwarsContext.Provider value={ contextData }>
      {children}
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
