import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { BarChartOptions, BarChartSeries } from "./data/BarChartdata";
import { LineOptions, LineSeries } from "./data/LineChartData";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type LineChartProps = {
  ESGcomment:string
};

export const LineChartSection = ({ESGcomment}:LineChartProps) => {
  return (
    <div css={st.root}>
      <div css={st.lineChart}>
        <div css={st.titleContainer}>
          <Typography css={st.riskTitle}>
            주가 및 <span css={st.redColor}>ESG Risk</span>
          </Typography>
          <div css={st.labels}>
            <div css={st.labelContainer}>
              <div css={st.redline}></div>
              <Typography css={st.label}>ESG Risk</Typography>
            </div>
            <div css={st.labelContainer}>
              <div css={st.yellowline}></div>
              <Typography css={st.label}>주가</Typography>
            </div>
            <div css={st.labelContainer}>
              <div css={st.blackbar}></div>
              <Typography css={st.label}>ESG 사건사고 기사수</Typography>
            </div>
          </div>
        </div>

        <Chart
          css={st.lineGraph}
          series={LineSeries}
          options={LineOptions}
          type="area"
          height={150}
          width={420}
        />
        <Chart
          css={st.barChart}
          series={BarChartSeries}
          options={BarChartOptions}
          type="bar"
          height={80}
          width={360}
        />
      </div>
      <div css={st.commentBox}>
        <Typography css={st.commentTitle}>ESG Comment</Typography>
        <Typography css={st.comment}>
        {ESGcomment}
        </Typography>
      </div>
    </div>
  );
};

const st = {
  lineGraph: css`
    margin-top: -10px;
  `,
  barChart: css`
    margin-left: 30px;
  `,
  labels: css`
    display: flex;
  `,
  labelContainer: css`
    display: flex;
    align-items: center;
  `,
  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  label: css`
    font-size: 10px;
    margin-left: 0.8px;
    transform: scale(0.8);
  `,
  yellowline: css`
    width: 15px;
    height: 2px;
    background-color: #ffbf57;
  `,
  redline: css`
    width: 15px;
    height: 2px;
    background-color: #b11f1f;
  `,
  blackbar: css`
    width: 15px;
    height: 7px;
    background-color: #555555;
  `,
  comment: css`
    font-size: 13px;
    margin-top: 23px;
  `,
  commentBox: css`
    background-color: #fff;
    margin-left: 15px;
    width: 250px;
    border-radius: 15px;
    padding: 15px 15px;
  `,
  commentTitle: css`
    font-size: 20px;
    font-weight: 600;
  `,
  redColor: css`
    color: #b11f1f;
  `,
  riskTitle: css`
    font-size: 20px;
    font-weight: 600;
  `,
  lineChart: css`
    width: 410px;
    height: 280px;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    &:nth-child(2) {
      z-index: 33;
    }
    .apexcharts-gridline {
      stroke-width: 3px;
    }
  `,
  root: css`
    margin-top: 15px;
    display: flex;
  `,
};
