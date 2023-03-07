import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import fetchRandom from '../../services/fetchRandom'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

const PopularRecipes = () => {
  const [random, setRandom] = useState([])

  useEffect(() => {
    const getData = localStorage.getItem('popular')

    if (getData) {
      setRandom(JSON.parse(getData))
    } else {
      const recipes = fetchRandom()
      setRandom(recipes)
    }
  }, [])
  return (
    <Wrapper>
      <h3>Random Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
          breakpoints: {
            1024: {
              perPage: 3,
            },
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {random.map(({ title, id, image }) => (
          <SplideSlide key={id}>
            <Card>
              <Link to={`/recipe/${id}`}>
                <p>{title}</p>
                <img src={image} alt={title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0;
`

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: #fff;
    width: 100%;
    height: 40%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  z-index: 3;
  border-radius: 2rem;
`

export default PopularRecipes
