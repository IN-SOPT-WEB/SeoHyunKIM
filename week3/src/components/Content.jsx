import { useState } from "react";
import styled from "styled-components";
import GameContent from "./GameContent";
import Retry from "./Retry";
import Score from "./Score";

export default function Content() {
  const [score, setScore] = useState(0);
  return (
    <>
      <Score score={score} />
      <GameContent score={score} setScore={setScore} />
      <Retry setScore={setScore} />
    </>
  );
}
