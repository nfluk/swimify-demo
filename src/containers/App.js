import { Typography, CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import ResultsList from '../components/ResultsList';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Typography variant="h3">Hello World</Typography>
      <ResultsList />
    </>
  );
}

export default App;
