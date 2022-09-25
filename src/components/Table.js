import React, { useContext, useEffect } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import fetchPlanets from '../services/fetchPlanets';
import styles from './style/Table.module.css';

function Table() {
  const {
    data,
    setData,
    filterByName,
    filterByNumber,
    planetsFiltered,
    setPlanetsFiltered,
  } = useContext(StarwarsContext);

  useEffect(() => {
    async function getPlanets() {
      const planets = await fetchPlanets();
      planets.forEach((planet) => delete planet.residents);
      setData(planets);
    }
    getPlanets();
  }, [setData]);

  useEffect(() => {
    const newData = data.filter((planet) => (
      filterByNumber.every((filter) => {
        if (filter.comparison === 'maior que') {
          return +planet[filter.column] > +filter.value;
        } if (filter.comparison === 'menor que') {
          return +planet[filter.column] < +filter.value;
        }
        return +planet[filter.column] === +filter.value;
      })
    ));
    setPlanetsFiltered(newData);
  }, [data, filterByNumber, setPlanetsFiltered]);

  const headers = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited',
    'URL'];

  return (
    <div className={ styles.tableContent }>
      <table>
        <thead>
          <tr>
            {headers.map((header) => <th key={ header }>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {planetsFiltered
            .filter((planet) => planet.name.toLowerCase().includes(filterByName.name))
            .map((planet) => (
              <tr key={ planet.name }>
                {Object.values(planet).map((item) => <td key={ item }>{item}</td>)}
              </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
