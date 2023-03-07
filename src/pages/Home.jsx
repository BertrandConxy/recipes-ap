import PopularRecipes from '../components/PopularRecipes/PopularRecipes'
import Search from '../components/Search/Search'
import Category from '../components/Category/Category'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div>
      <PopularRecipes />
      <Search />
      <Category />
    </motion.div>
  )
}

export default Home
