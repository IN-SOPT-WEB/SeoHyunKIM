import { useEffect, useState } from "react";
import styled from "styled-components";
import AccountInfo from "./AccountInfo";
import { useNavigate, useParams } from "react-router-dom";
import { getGithubProfile } from "utils/lib/searchUser";
import { userData } from "types/userInfo";

export default function UserInfo() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [userData, setUserData] = useState<userData>({
    followers: null,
    following: null,
    repos: null,
    avatar_url: null,
    name: null,
  });
  const [accountInfoList, setAccountInfoList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await getGithubProfile(userId);
      const userData = {
        followers: data.followers,
        following: data.following,
        repos: data.public_repos,
        avatar_url: data.avatar_url,
        name: data.name,
      };
      setUserData(userData);
      //렌더링
      const getAccountInfoList = ["Followers", "Following", "Repos"].map(
        (item) => <AccountInfo key={item} infoName={item} userData={userData} />
      );
      setAccountInfoList(getAccountInfoList);
    };
    getUserData();
  }, [userId]);

  return (
    <Container>
      <CloseButton
        onClick={() => {
          navigate("/search");
        }}
      >
        X
      </CloseButton>
      <Image src={userData.avatar_url || ""} alt={`${userId}의 프로필 사진`} />
      <br />
      <User id="userName">{userData.name}</User>
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
