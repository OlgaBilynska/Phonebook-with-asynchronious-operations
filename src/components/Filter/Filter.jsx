import React from 'react';
import { FilterLabel, FilterInput, FilterContainer } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';
import { useState } from 'react';

const Filter = () => {
  const valueFilter = useSelector(getFilter);
  const [filter, setFilter] = useState(valueFilter ?? '');

  const dispatch = useDispatch();

  const handleChange = e => {
    const filteredValue = e.currentTarget.value;
    setFilter(filteredValue);
    dispatch(setFilterValue(filteredValue));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter} onChange={handleChange} />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
