import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Movies } from "./components/Movies/Movies";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Header />
          <Movies />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
