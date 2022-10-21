import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Rout} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route elemente={<App/>}>
      <Route path="/" element={<home />}/>
      <Route path="movie/:id" element={<Movie />}/>
      <Route path="search" element={<Search />}/>
    </Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
)
