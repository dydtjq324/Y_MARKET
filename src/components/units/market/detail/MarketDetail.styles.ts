import styled from "@emotion/styled";
import {
  LikeOutlined,
  DislikeOutlined,
  MoneyCollectFilled,
  HeartFilled,
} from "@ant-design/icons";

import ReactPlayer from "react-player";
import { Modal } from "antd";

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
export const Wrapper = styled.div`
  width: 70%;
  margin: 100px;
`;
export const Money = styled(MoneyCollectFilled)`
  font-size: 50px;
  color: #ffd600;
  margin-right: 10px;
`;

export const Heart = styled(HeartFilled)`
  font-size: 24px;
  color: red;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 50px;
`;

export const MoneyText = styled.div`
  font-size: 50px;
  margin: 30px 0;
`;
export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;
export const a = styled.link``;

export const AButton = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
export const Button = styled.button`
  width: 180px;
  height: 60px;
  margin-left: 30px;
  background-color: #505957;
  color: white;
  font-family: "myFont_semiBold";
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  font-size: 22px;
`;
export const IconWrapper = styled.div`
  display: flex;
  text-align: center;
  font-size: 30px;
  align-items: center;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
  width: 486px;
  height: 240px;
`;

export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LocationIcon = styled.img``;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ffd600;
  margin: 0px 20px;
  cursor: pointer;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: #ffd600;
`;

export const DislikeCount = styled.div`
  color: #828282;
`;

export const LinkIcon = styled.img``;

export const ImageWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 400px;
  height: 200px;
  margin-right: 30px;
`;
