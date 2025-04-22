import { PersistStorage } from "zustand/middleware";

export const createStorageWrapper = (
  storageType: "local" | "session"
): PersistStorage<unknown> => {
  const isClient = typeof window !== "undefined";

  if (!isClient) {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    };
  }

  const storage = storageType === "local" ? localStorage : sessionStorage;
  return {
    getItem: (name) => {
      const storedValue = storage.getItem(name);
      return storedValue ? JSON.parse(storedValue) : null;
    },
    setItem: (name, value) => {
      storage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name) => {
      storage.removeItem(name);
    },
  };
};
