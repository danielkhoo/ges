import React from 'react';
import classes from './SearchFilters.module.css';
import SearchFilter from './SearchFilter/SearchFilter';

const searchFilters = props => {
  return (
    <ul className={classes.SearchFilters}>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('NUS') !== -1}
      >
        NUS
      </SearchFilter>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('NTU') !== -1}
      >
        NTU
      </SearchFilter>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('SMU') !== -1}
      >
        SMU
      </SearchFilter>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('SIT') !== -1}
      >
        SIT
      </SearchFilter>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('SUTD') !== -1}
      >
        SUTD
      </SearchFilter>
    </ul>
  );
};

export default searchFilters;
