// import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";

export default function Main() {
  return (
    <Container>
      <SearchBox />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f2eee5;
  width: 900px;
  height: 100vh;
  margin: 0 auto;
`;
