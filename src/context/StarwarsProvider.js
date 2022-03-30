import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);

  const [filterByName, setFilterByName] = useState({ name: '' });

  const contextData = {
    data,
    setData,
    filterByName,
    setFilterByName,
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
