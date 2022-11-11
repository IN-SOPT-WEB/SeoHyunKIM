import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountInfo from "./AccountInfo";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UserInfo() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [data, setData] = useState({});

  async function getGithubProfile() {
    const response = await axios.get(`https://api.github.com/users/${userId}`);
    setData(response.data);
  }

  useEffect(() => {
    getGithubProfile();
  }, [userId]);

  // 렌더링
  const accountInfos = ["Followers", "Following", "Repos"];
  const accountInfoList = accountInfos.map((item) => (
    <AccountInfo infoName={item} key={item} data={data}>
      {item}
    </AccountInfo>
  ));

  return (
    <Container>
      <CloseButton
        onClick={() => {
          navigate("/search");
        }}
      >
        X
      </CloseButton>
      <Image src={data.avatar_url} alt="~의 의미지" />
      <br />
      <User id="userName">{data.name}</User>
      <User id="userId">{userId}</User>
      <VisitBt
        onClick={() => {
          window.location.href = `https://github.com/${userId}`;
        }}
      >
        visit {userId}
      </VisitBt>
      <Container2>{accountInfoList}</Container2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  flex-wrap: wrap;

  position: relative;
  top: 70px;

  background-color: #f0b2ad;
  font-size: 32px;

  font-weight: bold;

  width: 600px;
  height: 490px;
  border-radius: 25px;
  margin: 0 auto;
`;

const CloseButton = styled.button`
  position: relative;
  top: 10px;
  left: 280px;

  color: white;
  font-size: 20px;

  background: none;
  border: none;
`;

const Image = styled.img`
  position: relative;
  top: 10px;

  background-color: white;
  width: 150px;
  height: 150px;
`;

const User = styled.h2`
  color: white;
  font-size: 25px;
  margin-bottom: 5px;
`;

const VisitBt = styled.button`
  box-sizing: border-box;

  background: none;
  font-size: 15px;
  color: white;

  border-color: white;
  border-radius: 20px;

  padding: 8px 13px;
  margin: 15px 0;

  &:hover {
    background-color: #686868;
    font-weight: bold;
  }
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 500px;
  height: 120px;
  margin: 10px 0;
`;
