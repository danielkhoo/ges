import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import ListHeaders from './../../components/Analyzer/ListHeaders/ListHeaders';
import ListItems from './../../components/Analyzer/ListItems/ListItems';
import SearchBar from './../../components/Analyzer/SearchBar/SearchBar';
import SearchFilters from './../../components/Analyzer/SearchFilters/SearchFilters';
import data from './data';
const items = data;
class DegreeAnalyzer extends Component {
  state = {
    filters: [],
    filteredItems: []
  };
  filterBySchool = (items, schools) => {
    let filteredItems = [];
    schools.forEach(key => {
      filteredItems = filteredItems.concat(items[key]);
    });
    return filteredItems;
  };

  addFilterHandler = name => {
    let currentFilters = this.state.filters;
    if (currentFilters.indexOf(name) === -1) {
      currentFilters.push(name);
      this.setState({ filters: currentFilters });
    }
    console.log(currentFilters);
  };
  removeFilterHandler = name => {
    let currentFilters = this.state.filters;
    if (currentFilters.indexOf(name) !== -1) {
      currentFilters.splice(currentFilters.indexOf(name), 1);
      this.setState({ filters: currentFilters });
    }
    console.log(currentFilters);
  };
  textChangedHandler = event => {
    const input = event.target.value.toLowerCase();
    let narrowedItems = this.filterBySchool(items, ['NUS', 'NTU']);
    let newItems = narrowedItems.filter(
      item => item.degree.toLowerCase().indexOf(input) > -1
    );
    this.setState({ filteredItems: newItems });
  };
  render() {
    return (
      <Aux>
        <SearchBar changed={event => this.textChangedHandler(event)} />
        <SearchFilters
          addFilter={this.addFilterHandler}
          removeFilter={this.removeFilterHandler}
          filters={this.state.filters}
        />
        <ListHeaders />
        <ListItems items={this.state.filteredItems} />
      </Aux>
    );
  }
}

export default DegreeAnalyzer;
