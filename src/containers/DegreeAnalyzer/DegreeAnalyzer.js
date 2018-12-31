import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import ListHeaders from './../../components/Analyzer/ListHeaders/ListHeaders';
import ListItems from './../../components/Analyzer/ListItems/ListItems';
import SearchBar from './../../components/Analyzer/SearchBar/SearchBar';
import SearchFilters from './../../components/Analyzer/SearchFilters/SearchFilters';
import data from './data';
const fullDataset = data;
class DegreeAnalyzer extends Component {
  state = {
    input: '',
    filters: [],
    filteredItems: [
      {
        degree: 'Bachelor of Arts',
        employment: 61.9,
        mean: 3005,
        median: 3000,
        group: 'Faculty of Arts & Social Sciences'
      },
      {
        degree: 'Bachelor of Arts (Hons)',
        employment: 66.7,
        mean: 3309,
        median: 3300,
        group: 'Faculty of Arts & Social Sciences'
      },
      {
        degree: 'Bachelor of Social Science',
        employment: 74.7,
        mean: 3365,
        median: 3300,
        group: 'Faculty of Arts & Social Sciences'
      },

      {
        degree: 'Bachelor of Dental Surgery',
        employment: 100.0,
        mean: 4124,
        median: 4050,
        group: 'Faculty Of Dentistry'
      },
      {
        degree: 'Bachelor of Engineering (Biomedical Engineering)',
        employment: 81.3,
        mean: 3215,
        median: 3200,
        group: 'Faculty Of Engineering'
      },
      {
        degree: 'Bachelor of Engineering (Chemical Engineering)',
        employment: 81.3,
        mean: 3550,
        median: 3500,
        group: 'Faculty Of Engineering'
      },
      {
        degree: 'Bachelor of Engineering (Civil Engineering)',
        employment: 90.9,
        mean: 3361,
        median: 3300,
        group: 'Faculty Of Engineering'
      },
      {
        degree: 'Bachelor of Engineering (Electrical Engineering)',
        employment: 86.5,
        mean: 3529,
        median: 3500,
        group: 'Faculty Of Engineering'
      },
      {
        degree: 'Bachelor of Engineering (Engineering Science)',
        employment: 64.7,
        mean: 3783,
        median: 3600,
        group: 'Faculty Of Engineering'
      },
      {
        degree: 'Bachelor of Engineering (Environmental Engineering)',
        employment: 71.2,
        mean: 3425,
        median: 3100,
        group: 'Faculty Of Engineering'
      },
      {
        degree: 'Bachelor of Engineering (Industrial and Systems Engineering)',
        employment: 89.9,
        mean: 3905,
        median: 3725,
        group: 'Faculty Of Engineering'
      },
      {
        degree: 'Bachelor of Engineering (Materials Science And Engineering)',
        employment: 86.0,
        mean: 3269,
        median: 3200,
        group: 'Faculty Of Engineering'
      },
      {
        degree: 'Bachelor of Laws',
        employment: 92.3,
        mean: 4958,
        median: 5000,
        group: 'Faculty of Law'
      },
      {
        degree: 'Bachelor of Applied Science (Hons)',
        employment: 50.0,
        mean: 3186,
        median: 3075,
        group: 'Faculty of Science'
      },
      {
        degree: 'Bachelor of Science',
        employment: 54.5,
        mean: 3053,
        median: 3000,
        group: 'Faculty of Science'
      },
      {
        degree: 'Bachelor of Science (Hons)',
        employment: 69.3,
        mean: 3340,
        median: 3200,
        group: 'Faculty of Science'
      },
      {
        degree: 'Bachelor of Science (Pharmacy)',
        employment: 94.5,
        mean: 3473,
        median: 3500,
        group: 'Faculty of Science'
      },
      {
        degree: 'Bachelor of Business Administration',
        employment: 87.3,
        mean: 3770,
        median: 3400,
        group: 'NUS Business School'
      },
      {
        degree: 'Bachelor of Business Administration (Hons)',
        employment: 93.6,
        mean: 4272,
        median: 3725,
        group: 'NUS Business School'
      },
      {
        degree: 'Bachelor of Business Administration (Accountancy)',
        employment: 94.4,
        mean: 3396,
        median: 3000,
        group: 'NUS Business School'
      },
      {
        degree: 'Bachelor of Business Administration (Accountancy) (Hons)',
        employment: 100.0,
        mean: 3689,
        median: 3100,
        group: 'NUS Business School'
      },

      {
        degree: 'Bachelor of Computing (Computer Science)',
        employment: 89.4,
        mean: 4510,
        median: 4200,
        group: 'School of Computing'
      },
      {
        degree: 'Bachelor of Computing (Information Systems)',
        employment: 91.8,
        mean: 4061,
        median: 4000,
        group: 'School of Computing'
      },
      {
        degree: 'Bachelor of Science (Business Analytics)',
        employment: 97.6,
        mean: 4114,
        median: 3810,
        group: 'School of Computing'
      },

      {
        degree: 'Bachelor of Arts (Architecture)',
        employment: 86.4,
        mean: 4037,
        median: 4000,
        group: 'School of Design and Environment'
      },
      {
        degree: 'Bachelor of Arts (Industrial Design)',
        employment: 60.0,
        mean: 3034,
        median: 2890,
        group: 'School of Design and Environment'
      },
      {
        degree: 'Bachelor of Science (Project and Facilities Management)',
        employment: 81.7,
        mean: 3105,
        median: 3000,
        group: 'School of Design and Environment'
      }
    ]
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
