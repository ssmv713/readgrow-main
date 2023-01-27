import { axiosClient } from "data/client/client";
import { EsgDataResponse } from "./esg.dto";

class EsgApiService {
  private static instance: EsgApiService;
  static get Instance(): EsgApiService {
    return this.instance || (this.instance = new this());
  }

  async requestEsgData(year: number, qtr: number): Promise<EsgDataResponse> {
    const response = await axiosClient.get(
      `/auth/esgsummary?year=${year}&qtr=${qtr}`,
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdpbnZlc3QucmVhZGdyb3dAZ21haWwuY29tIiwiY29ycG9yYXRlX2N1c3RvbWVyIjoxfQ.3hq3zO8ndPJoT3ZnEH6-eQ7cRuBPlHBvYHjn5_vliGk",
        },
      }
    );
    return response.data;
  }
}

export default EsgApiService.Instance;
