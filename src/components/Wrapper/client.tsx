"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
