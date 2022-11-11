import styled from "styled-components";
import Finish from "./Finish";
import SelectOptions from "./SelectOptions";
export default function GameContent({ score, setScore }) {
  const imgUrls = [
    "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
    "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png",
    "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/015101.png",
    "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png",
    "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000601.png",
  ];

  return (
    <Container>
      {/* 5점이면 게임 종료 -> 완료 화면 렌더링 */}
      {score === 5 ? (
        <Finish></Finish>
      ) : (
        <>
          <PokemonImg src={imgUrls[score]}></PokemonImg>
          <SelectOptions score={score} setScore={setScore}></SelectOptions>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PokemonImg = styled.img`
  width: 280px;
  border-radius: 30px;

  margin: 60px 0;
`;
