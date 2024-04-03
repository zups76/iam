// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Bpp from '@/components/Bpp'
import './App.css'
import TopHeader from '@/components/layout/TopHeader'
import CopyRight from '@/components/layout/CopyRight'
import Board from '@/views/Board'

function App() {

  return (
    <>
      <TopHeader/>
      /{ import.meta.env.VITE_TEST_DATA }/
        <BrowserRouter
          basename={import.meta.env.DEV ? '/iam' : '/iam'}>
          <Routes>
            <Route path="" element={<Bpp/>} />
            <Route path="/board/*" element={<Board/>} />
          </Routes>
        </BrowserRouter>
      <CopyRight/>
    </>
  )
}

export default App
