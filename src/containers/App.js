import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import MainTitle from '../components/MainTitle';
import Tabs from '../components/Tabs';
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

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Navbar />
      <MainTitle />
      <Tabs value={value} handleChange={handleChange} />
    </ApolloProvider>
  );
}

export default App;
