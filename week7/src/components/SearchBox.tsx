import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import History from "./History";

export default function SearchBox() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setUserId(e.currentTarget.value);
    }
  };

  useEffect(() => {
    if (userId) {
      if (!history.includes(userId)) {
        setHistory([userId, ...history]);
      }
      navigate(`/search/${userId}`);
      setShow(false);
      (document.activeElement as HTMLElement).blur();
    }
  }, [userId]);

  // 렌더링
  const historyList = history.map((item) => (
    <History
      setShow={setShow}
      item={item}
      history={history}
      setHistory={setHistory}
      key={item}
    />
  ));

  return (
    <Container>
      <Title>Github Profile Finder</Title>
      <SearchContainer>
        <SearchBar
          placeholder="Github username..."
          onKeyPress={handleOnKeyPress}
          onFocus={() => {
            setShow(true);
          }}
        />
        {show ? (history.length !== 0 ? historyList : null) : null}
      </SearchContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 50px;
  background-color: #f0b2ad;
  font-size: 32px;
  font-weight: bold;
  width: 600px;
  height: 140px;
  border-radius: 25px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #ffffff;
  margin: 0;
  margin: 25px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.input`
  box-sizing: border-box;
  background-color: black;
  opacity: 70%;
  font-size: 18px;
  color: white;
  width: 290px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;
