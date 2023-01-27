import { useQuery } from "react-query";
import EsgApiService from "./esg.api";

export const useRequstEsgData = (year: number, qtr: number) => {
  return useQuery(["esg", year, qtr], () =>
    EsgApiService.requestEsgData(year, qtr)
  );
};
