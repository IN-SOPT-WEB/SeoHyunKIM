import styled from "styled-components";

export default function Retry({ setScore }) {
  return (
    <>
      <Button
        onClick={() => {
          setScore(0);
        }}
      >
        다시하기
      </Button>
    </>
  );
}

const Button = styled.button`
  /* 위치 맨 아래로 */
  position: absolute;
  bottom: 25px;

  width: 100%;
  height: 60px;
  background-color: #ffd700;
  border: none;

  font-size: 17px;
  font-weight: bold;

  cursor: pointer;
`;
