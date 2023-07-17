import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 152px;
  background-color: #fee500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 35px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: black;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  font-size: 20px;
  margin: 10px;
  color: black;
  cursor: pointer;
`;
