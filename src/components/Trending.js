import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTrending } from '../features/movie/movieSlice';
function Trending() {
    const moviesTrending = useSelector(selectTrending)
  return (
    <div>
    <h4>Trending</h4>

    <Content>
    { moviesTrending  && moviesTrending.map((value, index) => (
    <Wrap key={index}>
    <Link to={`detail/${moviesTrending.id}`}>
    <img src={value.CardImg} alt={value.id}></img>
    </Link>
    </Wrap>
    ))}
    </Content>
    </div>
  )
}

const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
`;

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
overflow: hidden;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

&:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 / 80%) 8px 48px 58px -16px,
    rgb(0 0 0 / 72%) 8px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
}

`;

export default Trending