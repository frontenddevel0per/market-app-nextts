import "../styles/index.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import Sidebar from "../components/sidebar/sidebar.component";
import Sidebag from "../components/sidebag/sidebag.component";
import { useRouter } from "next/router";
import { AuthProvider } from "../components/auth/auth.context";
import { useEffect } from "react";

let persistor = persistStore(store);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {router.pathname === "/signup" || router.pathname === "/signin" ? (
              <Component {...pageProps} />
            ) : (
              <div className="main-page">
                <Sidebar />
                <Component {...pageProps} />
                <Sidebag />
              </div>
            )}
          </AuthProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
