import { useEffect, useState } from 'react'
import fetchRandom from '../../services/fetchRandom'
import Card from '../Card/Card'

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
    <div className="mx-7">
      <h2 className="m-5 mt-1 font-bold text-lg">Popular Picks</h2>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '4rem',
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
            <Card id={id} title={title} image={image} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default PopularRecipes
