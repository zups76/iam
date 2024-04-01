// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import List from '@/components/board/List'
import Detail from '@/components/board/Detail'
import Form from '@/components/board/Form'
import Button from '@/components/board/Button'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div style={{width: 700}}>
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
        <Button/>
      </div>
    </>
  )
}

export default App
