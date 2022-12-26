import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Entry = () => {
  const navigate = useNavigate();
  return (
    <StContainer>
      <StTitle>웹파트 비밀 편지함</StTitle>

      <StButton type="button" onClick={() => navigate("/Write")}>
        편지 쓰러가기
      </StButton>
    </StContainer>
  );
};

export default Entry;

const StContainer = styled.div`
  position: relative;
`;

const StTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  vertical-align: center;

  background-color: pink;
  padding: 15px;
`;

const StButton = styled.button`
  position: absolute;
  top: 15px;
  right: 0px;

  height: 50px;
  width: 150px;

  margin-right: 10px;
  border: none;
  border-radius: 15px;

  font-size: 20px;
  background-color: beige;

  font-weight: bold;

  cursor: pointer;
`;
