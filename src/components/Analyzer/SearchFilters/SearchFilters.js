import React from 'react';
import classes from './SearchFilters.module.css';
import SearchFilter from './SearchFilter/SearchFilter';
import colorCode from '../../../assets/colorCode';
const searchFilters = props => {
  return (
    <ul className={classes.SearchFilters}>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('NUS') !== -1}
        color={colorCode[0]}
      >
        NUS
      </SearchFilter>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('NTU') !== -1}
        color={colorCode[1]}
      >
        NTU
      </SearchFilter>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('SMU') !== -1}
        color={colorCode[2]}
      >
        SMU
      </SearchFilter>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('SIT') !== -1}
        color={colorCode[3]}
      >
        SIT
      </SearchFilter>
      <SearchFilter
        add={props.addFilter}
        remove={props.removeFilter}
        active={props.filters.indexOf('SUTD') !== -1}
        color={colorCode[4]}
      >
        SUTD
      </SearchFilter>
    </ul>
  );
};

export default searchFilters;
