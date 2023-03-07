import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Cuisines from './Cuisines'
import SearchResults from './SearchResults'
import { AnimatePresence } from 'framer-motion'

const Pages = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />}>
          <Route path="searched/:search" element={<SearchResults />} />
          <Route path="searched/:search/:type" element={<Cuisines />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
