import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import { NewsType } from "../../data/api/esg.dto";
type ArticleSectionProps = {
  envItem: NewsType[];
  socialItem: NewsType[];
  govItem: NewsType[];
};

export const RightArticle = ({
  envItem,
  socialItem,
  govItem,
}: ArticleSectionProps) => {
  return (
    <div css={st.bigRoot}>
      <div css={st.root}>
        <Typography css={st.articleTitle}>Environment</Typography>
        <ul>
          {envItem.map((it, index) => (
            <li css={st.articleContainer} key={index}>
              <div css={st.pink}></div>
              <Typography css={st.gd}>{it.NESG2}</Typography>
              <Typography css={st.article}>{it.title}</Typography>
            </li>
          ))}
        </ul>
      </div>
      <div css={st.root}>
        <Typography css={st.articleTitle}>Social</Typography>
        <ul>
          {socialItem.map((it, index) => (
            <li css={st.articleContainer} key={index}>
              <div css={st.pink}></div>
              <Typography css={st.gd}>{it.NESG2}</Typography>
              <Typography css={st.article}>{it.title}</Typography>
            </li>
          ))}
        </ul>
      </div>
      <div css={st.root}>
        <Typography css={st.articleTitle}>Governance</Typography>
        <ul>
          {govItem.map((it, index) => (
            <li css={st.articleContainer} key={index}>
              <div css={st.pink}></div>
              <Typography css={st.gd}>{it.NESG2}</Typography>
              <Typography css={st.article}>{it.title}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const st = {
  grey: css`
    width: 12px;
    height: 12px;
    border-radius: 70%;
    background-color: #f3f3f3;
    margin-right: 5px;
  `,
  red: css`
    width: 12px;
    height: 12px;
    border-radius: 70%;
    background-color: #c66363;
    margin-right: 5px;
  `,
  pink: css`
    width: 12px;
    height: 12px;
    border-radius: 70%;
    background-color: #ecbfbf;
    margin-right: 5px;
  `,
  bigRoot: css`
    transform: translateY(-3%);
  `,
  gd: css`
    font-size: 13px;
    margin-right: 5px;
    color: #b4b4b4;
  `,
  articleContainer: css`
    display: flex;
    height: 28px;
    align-items: center;
  `,
  root: css`
    background-color: #fff;
    margin-left: 15px;
    padding: 10px;
    height: 220px;
    border-radius: 10px;
    margin-bottom: 10px;
  `,
  articleTitle: css`
    color: #b11f1f;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
  `,
  article: css`
    font-size: 13px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 320px;
  `,
};
