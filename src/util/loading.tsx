import useLoadingStore from "@/store/loading";

const DEFAULT_RETRY_TIMES = parseInt(process.env.MAX_RETRY_TIMES || "5", 10);
const DEFAULT_RETRY_GAP = parseInt(process.env.DEFAULT_RETRY_GAP || "50", 10);
const MIN_INTERVAL = parseInt(process.env.MIN_RETRY_INTERVAL || "10", 10);
const MAX_INTERVAL = parseInt(process.env.MAX_RETRY_INTERVAL || "1500", 10);

const DEFAULT_ON_ERROR = (error: Error) => console.error(error);
const DEFAULT_INCREASE_FN = (n: number, m?: number) => (m ? n + m : n * 2);

interface RetrySetting {
  times: number;
  gap: number;
  increaseFn: (n: number, m?: number) => number;
}

const safeSetTimeout = (fn: () => void, ms: number) => {
  const safeVal = Math.min(Math.max(ms, MIN_INTERVAL), MAX_INTERVAL);
  setTimeout(fn, safeVal);
};

const tryLoadingLock = (setting?: RetrySetting): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (startLoading()) {
      resolve();
      return;
    }

    if (!setting) {
      reject(new Error("Loading is already in progress."));
      return;
    }

    const { times, gap, increaseFn } = setting;
    console.info("Loading is already in progress, retrying now...");

    let count = 0;
    let interval = gap;
    const retry = () => {
      console.info(`Retrying...retry ${++count}/${times}`);
      if (startLoading()) {
        resolve();
        return;
      }
      if (count >= times) {
        reject(new Error("Retry limit exceeded."));
        return;
      }

      interval = increaseFn(interval);
      safeSetTimeout(retry, interval);
    };
    safeSetTimeout(retry, interval);
  });
};

const handleErrorType = (error: unknown) => {
  if (error instanceof Error) return error;
  let message;
  try {
    message = "Unknown error: " + JSON.stringify(error);
  } catch {
    message = "Unknown error: [Unable to serialize error]";
  }
  return new Error(message);
};

const withLoadingFlow = async (
  process: () => Promise<void> | void,
  onError: (error: Error) => void,
  setting?: RetrySetting
): Promise<void> => {
  try {
    await tryLoadingLock(setting);
    await process();
  } catch (error) {
    onError(handleErrorType(error));
  } finally {
    endLoading();
  }
};

export const loadingFlowWithoutRetry = async (
  process: () => Promise<void> | void,
  onError = DEFAULT_ON_ERROR
) => {
  await withLoadingFlow(process, onError);
};

export const loadingFlowWithRetry = async (
  process: () => Promise<void> | void,
  onError = DEFAULT_ON_ERROR,
  setting = {
    times: DEFAULT_RETRY_TIMES,
    gap: DEFAULT_RETRY_GAP,
    increaseFn: DEFAULT_INCREASE_FN,
  }
) => {
  await withLoadingFlow(process, onError, setting);
};

export const startLoading = (): boolean => {
  const { isLoading, setIsLoading } = useLoadingStore.getState();
  if (isLoading) {
    return false;
  } else {
    setIsLoading(true);
    return true;
  }
};

export const endLoading = () => {
  useLoadingStore.getState().setIsLoading(false);
};
