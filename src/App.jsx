import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import john from './assets/john.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav id='fejlec'>
        <ul>
          <li><a href="works">Works</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
      <h1>Hi, I am John, Creative Technologist</h1>
      <img id='john' src={john}/>
    </>
  )
}

export default App
