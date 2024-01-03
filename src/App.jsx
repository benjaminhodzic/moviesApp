import { useEffect, useState } from 'react'
import './App.css'
import MovieSmallCart from './MovieSmallCart.jsx'
import { useQuery } from '@tanstack/react-query'
import {fetchMovie} from './util/http.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import TestRoute from './TestRoute.jsx'
import MoviePage from './MoviePage.jsx'
import RootLayout from './Root.jsx'

function App() {

  

  const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout/>,
    

    children: [
      {index: true, element: <HomePage />},
      {path: '/test', element: <TestRoute props={'tt0436992'} />},
      {path: '/titles/:movieID', element: <MoviePage />}
    ]
  }
]);



  

  return (
    <RouterProvider router={router} />
  )
}

export default App
