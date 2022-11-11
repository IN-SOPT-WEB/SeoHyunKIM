import styled from "styled-components";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 400px;
  height: 700px;
  background-color: #11264f;

  position: relative; // 다시하기 버튼의 위치 조정을 위한 부모 요소 relative 설정
  margin: auto; //가운데 정렬
`;
