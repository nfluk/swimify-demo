import { Typography, CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import Tabs from './Tabs';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Typography variant="h3">Hello World</Typography>
      <Tabs />
    </>
  );
}

export default App;
