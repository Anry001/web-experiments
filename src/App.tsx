import Routes from './app-routes/Routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  <QueryClientProvider client={queryClient}>
    return <Routes />;
  </QueryClientProvider>;
};

export default App;
