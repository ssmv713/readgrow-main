import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";

type TitleSectionProps = {
  socialGrade: string;
  total: string;
  enviro: string;
  gov: string;
  firmname: string;
};

export const TitleSection = ({
  socialGrade,
  total,
  enviro,
  gov,
  firmname,
}: TitleSectionProps) => {
  const alphabets = [
    {
      label: "Total",
      data: total,
      color: "rgba(177, 31, 31, 0.3)",
    },
    {
      label: "Environment",
      data: enviro,
      color: "rgba(177, 31, 31, 0.15)",
    },
    {
      label: "Social ",
      data: socialGrade,
      color: "rgba(177, 31, 31, 0.15)",
    },
    {
      label: "Governance",
      data: gov,
      color: "rgba(177, 31, 31, 0.15)",
    },
  ];

  return (
    <div>
      <div css={st.titleContainer}>
        <Typography css={st.ttile}>{firmname}</Typography>

        <ul css={st.alphabetContainer}>
          {alphabets.map((it, index) => (
            <li css={st.alphabetWrap} key={index}>
              <div css={st.alphabetTotal(it.color)}>{it.data}</div>
              <Typography css={st.btmText}>{it.label}</Typography>
            </li>
          ))}
        </ul>
      </div>
      <div css={st.redLine}></div>
    </div>
  );
};

const st = {
  redLine: css`
    width: 665px;
    height: 2px;
    background-color: #b11f1f;
    z-index: 33;
  `,
  alphabetWrap: css`
    margin-right: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  btmText: css`
    font-size: 8px;
  `,
  alphabetTotal: (color: string) => css`
    width: 50px;
    height: 50px;
    border-radius: 70%;
    background: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #343950;
    font-weight: 700;
  `,
  alphabet: css`
    width: 50px;
    height: 50px;

    border-radius: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #343950;
    font-weight: 700;
    background: rgba(177, 31, 31, 0.15);
  `,
  alphabetContainer: css`
    display: flex;
    margin-bottom: 10px;
  `,
  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  ttile: css`
    font-size: 40px;
    font-weight: 900;
    color: #343950;
  `,
};
