import React, { useEffect, useState } from 'react';
import Filters from "./components/Filters/Filters";
import Main from "./components/Main/Main";

import './App.css';

export interface IFilters {

}

export enum MultipleFilters {
  upcoming = "upcoming",
  inprocess = "inprocess",
  past = "past",
}

const App: React.FC = () => {

  const [items, setItems] = useState<[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [selectedFilter, setSelectedFilter] = useState<string>(MultipleFilters.upcoming);
  const [multipleFilters, setMultipleFilters] = useState<IFilters[]>([1]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://frontapi.inkin.com/getContests.php?page=1&pagesize=10&state=${selectedFilter}&metrics=${multipleFilters.join(',')}`)
      .then(response => response.json())
      .then(response => {
        setItems(response);
      }).finally(() => {
        setLoading(false)
      })
  }, [multipleFilters, selectedFilter]);


  function handleSelectiveFilter(type: number) {
    const filterAlreadyExists = multipleFilters.find(multipleFilters => multipleFilters === type);
    let newFilters = multipleFilters;
    if (filterAlreadyExists) {
      if (multipleFilters.length > 1) {
        newFilters = multipleFilters.filter(filter => filter !== type);
      }
    } else {
      newFilters = [...multipleFilters, type]
    }
    setMultipleFilters(newFilters)

  }
  return (
    <div className="app">
      <Filters
        multipleFilters={multipleFilters}
        selectedFilter={selectedFilter}
        onFilterClick={setSelectedFilter}
        onSelectiveFilterClick={handleSelectiveFilter}
      />
      {
        !isLoading ? (
          <Main
            items={items}
          />
        ) :
          <span className="loader">Loading...</span>
      }
    </div>
  );
}

export default App;
