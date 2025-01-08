import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/About/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

/* 
// 1st way to create router
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
]) */

// 2nd way to create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
      <Route path='user/:id' element={<User/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
