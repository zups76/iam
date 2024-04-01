// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Slider } from '@radix-ui/themes'

function App() {

  return (
    <>
      List
      <div>
        <Slider defaultValue={[40]} min={0} max={100} step={20} size={'3'} />
      </div>

    </>
  )
}

export default App