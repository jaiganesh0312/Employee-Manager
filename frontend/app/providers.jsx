"use client";
import { HeroUIProvider } from "@heroui/react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../lib/redux/store";
import Toast from "../components/Toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <HeroUIProvider>
            <main className="light text-foreground bg-background">
              {children}
              <Toast />
            </main>
          </HeroUIProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
