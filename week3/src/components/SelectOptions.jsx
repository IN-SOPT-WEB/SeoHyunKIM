import styled from "styled-components";

export default function SelectOptions({ score, setScore }) {
  const options = [
    ["캐터피", "버터플"],
    ["구구", "꼬렛"],
    ["피카츄", "모래두지"],
    ["이브이", "푸린"],
    ["뚜벅초", "디그다"],
  ];
  const answer = ["이상해씨", "꼬부기", "뮤", "파이리", "리자몽"];

  //배열 순서 무작위 셔플
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  //이번 문제 선택지
  let nowOptions = options[score].concat(answer[score]);
  shuffle(nowOptions);

  //정답 확인 함수
  const checkAnswer = (button, answer) => {
    if (answer === button) {
      setScore(score + 1);
    } else {
      alert("오답입니다. 다시 시도하세요.");
    }
  };

  return (
    <Container>
      {/* 버튼 클릭 시 정답/오답 확인 */}
      <Button
        onClick={() => {
          checkAnswer(nowOptions[0], answer[score]);
        }}
      >
        {nowOptions[0]}
      </Button>
      <Button
        onClick={() => {
          checkAnswer(nowOptions[1], answer[score]);
        }}
      >
        {nowOptions[1]}
      </Button>
      <Button
        onClick={() => {
          checkAnswer(nowOptions[2], answer[score]);
        }}
      >
        {nowOptions[2]}
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 100%;
  height: 90px;
`;

const Button = styled.button`
  width: 115px;
  height: 50px;

  border-radius: 15px;
  background-color: white;

  cursor: pointer;

  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #b9b9b9;
  }
`;
