import styled from "styled-components";
export default function Finish() {
  return (
    <Container>
      <FinishMsg>
        <span>축하합니다</span>
        <span>Game Complete!</span>
      </FinishMsg>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;

  height: 500px;
`;
const FinishMsg = styled.p`
  color: white;
  font-size: 35px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
