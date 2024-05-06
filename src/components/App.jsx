import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DesktopPage from "../pages/DesktopPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <DesktopPage />
      </>
    </QueryClientProvider>
  );
}

export default App;
