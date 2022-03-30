import React, { useContext, useEffect } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function FiltersHeader() {
  const {
    setFilterByName,
    filterByNumber,
    setFilterByNumber,
    actualNumberFilter,
    setActualNumberFilter,
    columnsName,
    setColumnsName,
  } = useContext(StarwarsContext);

  const handleChangeName = ({ target }) => {
    setFilterByName({
      name: target.value.toLowerCase(),
    });
  };

  const handleChangeNumber = ({ target }) => {
    setActualNumberFilter({ ...actualNumberFilter, [target.name]: target.value });
  };

  /* const setActualColumns = () => {
    const actualColumns = filterByNumber.map[filterByNumber.column];
    return actualColumns;
    /* let actualColumns = [];
    filterByNumber.map((element) => {
      return actualColumns: [...element];
    });
  }; */

  useEffect(() => {
    const actualColumnsName = filterByNumber
      .map((filter) => filter.column);
    setColumnsName(actualColumnsName);
  }, [filterByNumber, setColumnsName]);

  const columns = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const comparisons = ['maior que', 'menor que', 'igual a'];

  return (
    <form
      onSubmit={ (event) => {
        event.preventDefault();
        setFilterByNumber([...filterByNumber, actualNumberFilter]);
      } }
    >
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="filterByName"
          onChange={ handleChangeName }
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          value={ actualNumberFilter.column }
          name="column"
          onChange={ handleChangeNumber }
        >
          {columns.filter((column) => !columnsName.includes(column))
            .map((column) => (
              <option key={ column }>{column}</option>
            ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ actualNumberFilter.comparison }
          name="comparison"
          onChange={ handleChangeNumber }
        >
          {comparisons.map((comparison) => (
            <option key={ comparison }>{comparison}</option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          value={ actualNumberFilter.value }
          name="value"
          onChange={ handleChangeNumber }
        />
        <button
          data-testid="button-filter"
          type="submit"
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}

export default FiltersHeader;
