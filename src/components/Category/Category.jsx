import { FaPizzaSlice, FaHamburger, FaFilter } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { cuisineOptions } from '../../Data/CuisineOptions'

const Category = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { search } = params

  const handleChange = (e) => {
    navigate(`/searched/${search}/${e.target.value}`)
  }
  return (
    <div className="w-[50%] m-auto">
      {/* <SLink to={'/cuisines/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisines/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisines/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisines/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink> */}
      <form className="flex items-center">
        <FaFilter className="mx-2" />
        <select
          name="cuisine"
          className="border border-2 py-2 px-1 w-[50%] outline-none"
          onChange={handleChange}
        >
          {cuisineOptions.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default Category
