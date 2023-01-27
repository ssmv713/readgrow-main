import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { chartOptions, Series } from "./data/StickGraphData";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export const StickGraph = () => {
  return (
    <div css={st.root}>
      <div css={st.titleContainer}>
        <Typography css={st.title}>
          <span css={st.redColor}>ESG Risk</span> by topic
        </Typography>
        <div css={st.legends}>
          <div css={st.green}></div>
          <Typography css={st.legend}>Environment</Typography>
          <div css={st.blue}></div>
          <Typography css={st.legend}>Social</Typography>
          <div css={st.yellow}></div>
          <Typography css={st.legend}>Governance</Typography>
        </div>
      </div>

      <Chart
        series={Series}
        options={chartOptions}
        type="bar"
        height={250}
        width={660}
      />
    </div>
  );
};

const st = {
  yellow: css`
    background-color: #ffbf57;
    width: 20px;
    height: 7px;
    margin-left: 10px;
  `,
  blue: css`
    background-color: #7dabf8;
    width: 20px;
    height: 7px;
    margin-left: 10px;
  `,
  legend: css`
    font-size: 12px;
    margin-left: 5px;
  `,
  green: css`
    background-color: #49c39d;
    width: 20px;
    height: 7px;
    margin-left: 10px;
  `,
  legends: css`
    display: flex;
    align-items: center;
  `,
  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  root: css`
    width: 100%;
    height: 280px;
    background-color: #fff;
    margin-top: 15px;
    padding: 10px;
    border-radius: 15px;
    position: relative;

    .apexcharts-inner {
      background: #000;
    }
    .apexcharts-gridline {
      stroke-width: 3px;
    }
    text {
      tspan:nth-of-type(2n) {
        font-size: 6.5px;
        font-weight: 400;
      }
      tspan {
        font-weight: 700;
        padding-right: 10px;
        text-align: center;
      }
    }
  `,
  title: css`
    color: #353535;
    font-size: 20px;
    font-weight: 600;
  `,
  redColor: css`
    color: #b11f1f;
  `,
};
