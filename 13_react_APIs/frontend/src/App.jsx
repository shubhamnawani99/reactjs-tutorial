import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [products, error, loading] = useCustomReactQuery('api/products?search=' + search)

  if(error){
    return <h1>Something went Wrong</h1>
  }

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Chai and API in react</h1>
      <input type="text" placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />
      <h1>Number of Products is/are: {products.length}</h1>
    </>
  )
}

export default App

const useCustomReactQuery = (urlPath) => {
  const [products, setProducts] = useState([])
  // errors are put in states
  const [error, setError] = useState(false)
  // handle loading cases
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController() // to cancel the prev requests

    // halt the execution of the function until the promise is resolved
    // using async await
    // make IIFE
      ;(async() => {
      try {
        setLoading(true) // set loading to true
        setError(false) // reset the error state
        const response = await axios.get(urlPath, 
          {signal: controller.signal}
        )
        console.log(response.data);
        setProducts(response.data);
        setLoading(false) // set loading to false
      } catch (error) {
        // handle axios error
        if(axios.isCancel(error)){
          console.log('Request Cancelled', error)
          return
        }
        setError(true)
        console.error(error)  // log the error
        setLoading(false)
      } finally {
        setLoading(false)
      }
  })()
  // cleanup function
    return () => {
      controller.abort()
    }
  }, [urlPath])

  return [products, error, loading]
}