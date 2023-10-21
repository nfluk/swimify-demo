import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import MainTitle from '../components/MainTitle';
import Tabs from '../components/Tabs';

function App() {
  const [value, setValue] = useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <Navbar />
      <MainTitle />
      <Tabs value={value} handleChange={handleChange} />
    </>
  );
}

export default App;
