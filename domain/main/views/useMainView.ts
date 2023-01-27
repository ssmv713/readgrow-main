import { useRequstEsgData } from "data/api/useEsgApiHooks";

export const useMainView = () => {
  const { data } = useRequstEsgData(2022, 4);

  if (!data) {
    return {
      result: null,
    };
  }

  return {
    result: data,
  };
};
