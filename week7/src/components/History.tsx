import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface HistoryData {
  item: string;
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function History(props: HistoryData) {
  const { item, history, setHistory, setShow } = props;
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const userId = e.currentTarget.innerText;
    navigate(`/search/${userId}`);
    setShow(false);
  };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHistory(history.filter((item) => item !== e.currentTarget.id));
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
