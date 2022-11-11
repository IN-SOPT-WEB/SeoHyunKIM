import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import History from "./History";

export default function SearchBox() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [show, setShow] = useState(false);

  const handleOnKeyPress = (e) => {
    if (e.key == "Enter") {
      const userId = e.target.value;
      if (!history.includes(userId)) {
        setHistory([userId, ...history]);
      }
      navigate(`/search/${userId}`);
      setShow(false);
    }
  };

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
        {show ? historyList : null}
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
