import Routes from './app-routes/Routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />;
    </QueryClientProvider>
  );
};

export default App;
