import React from "react";
import styled from "styled-components";

interface AccountData {
  infoName: string;
  userData: {
    followers: Number | null;
    following: Number | null;
    repos: Number | null;
    avatar_url: string | null;
    name: string | null;
  };
}

export default function AccountInfo({ infoName, userData }: AccountData) {
  console.log(userData);
  return (
    <Container>
      <InfoName>{infoName}</InfoName>
      <Number>
        {/* {infoName === "Followers"
          ? userData.followers
          : infoName === "Following"
          ? userData.following
          : userData.repos} */}
      </Number>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5c1c5;
  width: 145px;
  height: 110px;
  border-radius: 15px;
`;

const InfoName = styled.h3`
  color: black;
  font-size: 20px;
  margin: 15px 0;
`;

const Number = styled.p`
  color: black;
  font-size: 40px;
`;