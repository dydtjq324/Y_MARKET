import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    @font-face {
      font-family: "myFont";
      src: url("/fonts/establishRetrosans.ttf");
    }
    @font-face {
      font-family: "myFont_semiBold";
      src: url("/fonts/Pretendard-SemiBold.ttf");
    }
  }
`;
