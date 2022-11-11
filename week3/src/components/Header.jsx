import styled from "styled-components";

export default function Header() {
  return (
    <Title>
      <H1>어떤 포켓몬일까요?</H1>
    </Title>
  );
}

const Title = styled.div`
  display: grid;
  justify-content: center;

  height: 80px;
`;

const H1 = styled.h1`
  font-size: 27px;
  color: #ffd700;
`;
