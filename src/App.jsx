import { useState } from 'react'
import './App.css'
import Reserve from './components/Reserve/Reserve'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import JoinUs from './components/JoinUs/JoinUs'
import Home from './components/Home/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/reserve" element={<Reserve />}/>
          <Route path="/joinUs" element={<JoinUs />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
