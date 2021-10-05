import React, { useState, useEffect } from "react";
import { Api } from "../../../services/api";
import Slider from "react-slick";

import * as S from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Cards() {

  const [list, setList] = useState([])
  const [zoom, setZoom] = useState(false)
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    Api.get()
    .then(response => setList(response.data))
  }, [])

  function handleZoom(img) {
    setZoom(zoom === false ? img : false)
  }

  function handleReveal(card) {
    setReveal(reveal === false ? card : false)
  }
  
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    draggable: true,
    centerMode: true,
    accessibility: true,
    speed: 1500,
    slidesToShow: 3,
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Slider {...settings}>
          {list.map((character, i) => (
            <S.Content key={i}>
              <S.Info>
                <S.Name className="name">{character.name}</S.Name>
                <S.Status>
                  <p>
                    {character.hogwartsStaff && 'Hogwarts Staff'}
                    {character.hogwartsStudent && 'Hogwarts Student'}
                  </p>
                  <p>{character.alive ? 'Alive' : 'Dead'}</p>
                </S.Status>
              </S.Info>

              <S.Profile>
                <S.Picture>
                  <S.PictureImg
                    zoom={zoom === i}
                    src={character.image}
                    alt={`Retrato do personagem ${character.name}`}
                    className="picture-img"
                  />
                  <S.ImgGradient className="img-gradient"/>

                  <S.Magnifier
                    onClick={() => handleZoom(i)}
                    className="magnifier"
                  >🔍</S.Magnifier>
                </S.Picture>
                <S.Details reveal={reveal === i}>
                  <S.RevealBtn 
                    reveal={reveal}
                    onClick={() => handleReveal(i)}
                    className="reveal-btn"
                  >ᐃ</S.RevealBtn>
                  <p>Year of birth: {character.yearOfBirth ? character.yearOfBirth : 'Unknown'}</p>
                  <p>Species: {character.species}</p>
                  <p>Ancestry: {character.ancestry ? character.ancestry : 'Unknown'}</p>
                  <p>House: {character.house ? character.house : 'Unknown'}</p>
                  <p>Patronus: {character.patronus ? character.patronus : 'Unknown'}</p>
                </S.Details>
              </S.Profile>
            </S.Content>
          ))}
        </Slider>
      </S.Wrapper>
    </S.Container>
  )
};