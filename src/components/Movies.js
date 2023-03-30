import React from 'react'
import Populars from "./Populars";
import NewTo from "./NewTo";
import styled from "styled-components";
import KidsTv from "./KidsTv";
import Trending from "./Trending";
import Original from "./Original";
import Hollywood from "./Hollywood";
function Movies() {
    return (
        <Container>
            <Populars />
          <NewTo />
          <Trending />
          <Original />
          <Hollywood />
          <KidsTv />
        </Container>
      )
}

export default Movies;
const Container = styled.div`


`;