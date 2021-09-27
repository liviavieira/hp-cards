import React, { useState, useEffect } from "react";
import { Api } from "../../services/api";
import Slider from "react-slick";

import * as S from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Cards() {

  const [list, setList] = useState([])

  useEffect(() => {
    Api.get()
    .then(response => setList(response.data))
    console.log(Api.get())
  }, [])
  
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    draggable: true,
    accessibility: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {list.map((character, i) => (
          <S.Content key={i}>
            <h3>{character.name}</h3>
            <h4>
              {character.hogwartsStaff && 'Hogwarts Staff'}
              {character.hogwartsStudent && 'Hogwarts Student'}
            </h4>
            <p>{character.alive ? 'Alive' : 'Dead'}</p>

            <S.Profile>
              <S.Picture>
                <S.PictureImg
                  src={character.image}
                  alt={`Retrato de ${character.name}`}
                />
              </S.Picture>
              <S.Info>
                <p>Year of birth: {character.yearOfBirth ? character.yearOfBirth : 'Unknown'}</p>
                <p>Species: {character.species}</p>
                <p>Ancestry: {character.ancestry ? character.ancestry : 'Unknown'}</p>
                <p>House: {character.house ? character.house : 'Unknown'}</p>
                <p>Patronus: {character.patronus ? character.patronus : 'Unknown'}</p>
              </S.Info>
            </S.Profile>
          </S.Content>
        ))}
      </Slider>
    </S.Wrapper>
  )
};