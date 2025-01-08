# React Router
- By default, react does not come with built-in router functionalities.
- Website - https://reactrouter.com/
- For installation, refer installation guide at the above website
- Command - npm i react-router-dom
- `import {Link, NavLink} from 'react-router-dom'`
    - `<Link>` tag is used in place of `<a>` tag (<a\> tag is not used because page gets refreshed on using the tag)
    - `<NavLink>` provides us with additional features
    ```js
    <NavLink to='/' className={({isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
    ```
    - `NavLink` provides us with `isActive` property which can be used to determine which link is active and change color accordingly with the help of CSS properties.
    - The `to=` property is used to provide with the link to navigate to.

## How to set up routing?
- Head over to `main.jsx` and add the following
```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: '', element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'contact-us', element: <Contact/>}
    ]
  }  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
```
- 2nd way to set-up routing
```js
// 2nd way to create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
    </Route>
  )
)
```
## How to fix header and footer?
- We make use of `Outlet` and define a `Layout` which is then given to the root route element
## Outlet.jsx
```js
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet />  
    {/*Header and Footer remains the same 
    but the context defined at Outlet would change*/}
    <Footer/>
    </>
  )
}
```

## How to use paramaters in routing?
- Create a new component called user.jsx
```js
import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
  const {id} = useParams()
  return (
    <div>User: {id}</div>
  )
}
```
- In main.jsx, add the following route
```js
<Route path='user/:id' element={<User/>}/>
```
- The `id` given after the `/:` is the name of the parameter that can be acces with the help of `useParams` method.

## How to use API call which page is loaded?
- with the help of useEffect and fetch() call
### Github.jsx
```js
import React, { useEffect, useState } from 'react'

export default function Github() {
    const url = 'https://api.github.com/users/shubhamnawani99'
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-3xl text-white'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} srcset="" />
    </div>
  )
}
```
## Further optimization using Loader()
- Loader can be used to start data-fetch call on events like mouserollover, prior to the user clicking the actual link.
```
export const githubInfoLoader = async() => {
    const response = await fetch(url)
    return response.json()
}
```
- Add to the component you want to optimize
- Then, add to route
`<Route loader={githubInfoLoader} path='github' element={<Github/>}/>`


