import { css } from "@emotion/react";
import { LineChartSection } from "../LineChart";
import { RightArticle } from "../rightArticle";
import { StickGraph } from "../StickGraph";
import { TitleSection } from "../titleSection";
import { TopTitle } from "../topTitle";
import { useMainView } from "./useMainView";

export const MainView = () => {
  const { result } = useMainView();

  if (!result) {
    return <div></div>;
  }

  return (
    <div css={st.root}>
      <TopTitle />
      <div css={st.container}>
        <div css={st.left}>
          <TitleSection socialGrade={result.Social_Grade}
           total={result.Total}
           enviro={result.Enviornment_Grade}
           gov={result.Governance_Grade}
           firmname={result.firmname}/>
          <StickGraph/>
          <LineChartSection ESGcomment={result.ESGComment}/>
        </div>
        <RightArticle envTitle={result.Enviornment_News.item.title} />
      </div>
    </div>
  );
};

const st = {
  container: css`
    display: flex;
  `,
  left: css`
    width: 670px;
  `,
  root: css`
    width: 297mm;
    height: 210mm;
    background-color: #fafafa;
    padding: 40px 28px 35px 28px;
  `,
};
