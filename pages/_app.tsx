import "../styles/index.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import Sidebar from "../components/sidebar/sidebar.component";
import Sidebag from "../components/sidebag/sidebag.component";

let persistor = persistStore(store);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <div className="main-page">
            <Sidebar />
            <Component {...pageProps} />
            <Sidebag />
          </div>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
