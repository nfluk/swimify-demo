import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import MainTitle from '../components/MainTitle';
import Tabs from './Tabs';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://data-test.swimify.com/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'content-type': 'application/json',
    'x-hasura-public-secret-key':
      'bAJ1k2c2wsoL5nEigS7GDYtrzgbDUYdY9pRUdqatpVTm6oBFsyr5wh8EgG3gyK5R',
    'x-hasura-role': 'public',
  },
});

function App() {
  const [value, setValue] = useState('1');
  const [date, setDate] = useState('2019-06-11');
  const [distance, setDistance] = useState('');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleCellClick = (e) => {
    setDate(e.target.textContent);
  };

  const handleDistanceClick = (e) => {
    let filtered = e.target.textContent;
    if (filtered === 'All') {
      filtered = '';
    }
    setDistance(filtered);
  };

  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Navbar />
      <MainTitle />
      <Tabs
        value={value}
        handleChange={handleChange}
        handleCellClick={handleCellClick}
        handleDistanceClick={handleDistanceClick}
        distances={distances}
        distance={distance}
        date={date}
      />
    </ApolloProvider>
  );
}

const distances = ['50m', '100m', '200m', '400m', '800m', '1500m', 'All'];

export default App;
