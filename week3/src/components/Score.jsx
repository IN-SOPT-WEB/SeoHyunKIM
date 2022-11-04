import styled from "styled-components";
export default function Score({ score }) {
  return (
    <Container>
      <Span>점수 : {score}점</Span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  background-color: #ffd700;
`;

const Span = styled.span`
  font-size: 17px;
  font-weight: bold;
`;
