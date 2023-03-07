import PopularRecipes from '../components/PopularRecipes/PopularRecipes'
import Search from '../components/Search/Search'
import Category from '../components/Category/Category'
import SearchResults from './SearchResults'
import Cuisines from './Cuisines'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div>
      <PopularRecipes />
      <Search />
      <SearchResults />
    </motion.div>
  )
}

export default Home
