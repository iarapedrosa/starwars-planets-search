import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function FiltersHeader() {
  const { setFilterByName } = useContext(StarwarsContext);

  const handleChange = ({ target }) => {
    setFilterByName({
      name: target.value.toLowerCase(),
    });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      name="filterByName"
      onChange={ handleChange }
    />
  );
}

export default FiltersHeader;
