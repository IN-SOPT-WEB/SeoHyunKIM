import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function History({ setShow, item, history, setHistory }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const userId = e.target.innerText;
    navigate(`/search/${userId}`);
    setShow(false);
  };
  const handleDelete = (e) => {
    setHistory(history.filter((item) => item !== e.target.id));
  };
  return (
    <Container>
      <HistoryList onClick={handleClick}>{item}</HistoryList>
      <DelHistory id={item} onClick={handleDelete}>
        X
      </DelHistory>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  z-index: 1;
`;

const HistoryList = styled.button`
  display: flex;
  align-items: center;

  background-color: black;
  opacity: 40%;

  text-align: center;

  color: white;
  font-size: 16px;

  width: 88%;
  height: 40px;

  border: none;
`;

const DelHistory = styled.button`
  color: white;
  background-color: black;
  width: 12%;
`;
