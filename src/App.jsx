import { useEffect, useState } from 'react'
import './App.css'
import MovieSmallCart from './MovieSmallCart.jsx'
import { useQuery } from '@tanstack/react-query'
import {fetchForHomePage, fetchMovie} from './util/http.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import TestRoute from './TestRoute.jsx'
import MoviePage from './MoviePage.jsx'
import RootLayout from './Root.jsx'
import ErrorPage from './ErrorPage.jsx'

function App() {

  

  const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout/>,
    errorElement: ErrorPage,

    children: [
      {index: true, element: <HomePage />, loader: async () => { return await fetchForHomePage(); }},
      {path: '/test', element: <TestRoute />},
      {path: '/titles/:movieID', element: <MoviePage />}
    ]
  }
]);



  

  return (
    <RouterProvider router={router} />
  )
}

export default App
