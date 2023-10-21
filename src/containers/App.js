import { Typography, CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import Tabs from './Tabs';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Typography variant="h3" align="center">
        The Best Competition Ever
      </Typography>
      <Tabs />
    </>
  );
}

export default App;
