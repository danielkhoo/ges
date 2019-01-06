import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Banner from '../../components/Banner/Banner';
import Chart from './../../components/Chart/Chart';
import Instructions from './../../components/Instructions/Instructions';
import ListHeaders from './../../components/Analyzer/ListHeaders/ListHeaders';
import ListItems from './../../components/Analyzer/ListItems/ListItems';
import SearchBar from './../../components/Analyzer/SearchBar/SearchBar';
import SearchFilters from './../../components/Analyzer/SearchFilters/SearchFilters';
import data from '../../assets/data';
import sampledata from '../../assets/sample';
import classes from './DegreeAnalyzer.module.css';
const fullDataset = data;
class DegreeAnalyzer extends Component {
  state = {
    input: '',
    filters: ['NTU', 'SMU'],
    filteredItems: sampledata
  };
  filterData = (data, filters, input) => {
    let filteredItems = [];
    //filter by school
    filters.forEach(key => {
      filteredItems = filteredItems.concat(data[key]);
    });
    //filter by keyword
    return filteredItems.filter(
      item => item.degree.toLowerCase().indexOf(input) > -1
    );
  };

  addFilterHandler = name => {
    let currentFilters = this.state.filters;
    if (currentFilters.indexOf(name) === -1) {
      currentFilters.push(name);
      const input = this.state.input;
      let filteredItems = this.filterData(fullDataset, currentFilters, input);
      this.setState({ filters: currentFilters, filteredItems: filteredItems });
    }
  };
  removeFilterHandler = name => {
    let currentFilters = this.state.filters;
    if (currentFilters.indexOf(name) !== -1) {
      currentFilters.splice(currentFilters.indexOf(name), 1);
      const input = this.state.input;
      let filteredItems = this.filterData(fullDataset, currentFilters, input);
      this.setState({ filters: currentFilters, filteredItems: filteredItems });
    }
  };
  textChangedHandler = event => {
    const input = event.target.value.toLowerCase();
    const currentFilters = this.state.filters;
    let filteredItems = this.filterData(fullDataset, currentFilters, input);
    this.setState({ input: input, filteredItems: filteredItems });
  };
  keyPressHandler = event => {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  };

  render() {
    return (
      <Aux>
        <Banner />
        <Chart chartData={this.state.filteredItems} />
        <Instructions>Select the one or more schools to view.</Instructions>
        <SearchFilters
          addFilter={this.addFilterHandler}
          removeFilter={this.removeFilterHandler}
          filters={this.state.filters}
        />
        <Instructions>
          Use the search box to narrow down the results.
        </Instructions>
        <SearchBar
          changed={event => this.textChangedHandler(event)}
          keypress={event => this.keyPressHandler(event)}
        />

        <div className={classes.ResultsTable}>
          <ListHeaders />
          <ListItems items={this.state.filteredItems} />
        </div>
      </Aux>
    );
  }
}

export default DegreeAnalyzer;
