const fetchSearched = async (search) => {
  console.log(search)
  const resp = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_API_KEY
    }&query=${search}`,
  )
  const data = await resp.json()
  return data.results
}

export default fetchSearched
