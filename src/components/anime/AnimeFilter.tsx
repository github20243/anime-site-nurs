import React, { useState } from 'react';
import { TextField, MenuItem, Box } from '@mui/material';

interface FilterProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
}

const AnimeFilter: React.FC<FilterProps> = ({ onFilterChange, onSortChange }) => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
      <TextField
        label="Поиск по названию"
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
        sx={{ marginRight: 2 }}
      />
      <TextField
        select
        label="Сортировка"
        variant="outlined"
        value={sort}
        onChange={handleSortChange}
        sx={{ width: 200 }}
      >
        <MenuItem value="rating">По рейтингу</MenuItem>
        <MenuItem value="popularity">По популярности</MenuItem>
      </TextField>
    </Box>
  );
};

export default AnimeFilter;
