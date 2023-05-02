import  React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="pen-input"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Pen Brand Name" />}
    />
  );
}

const top100Films = [
  { label: 'Parker' },
  { label: 'Pierre Cardin' },
  { label: 'Cello' },
  { label: 'Linc'},
  { label: 'Sheaffer' },
  { label: "Cross" },
  { label: 'Mont Blanc' },
 
 
];
