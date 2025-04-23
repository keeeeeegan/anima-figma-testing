import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigation } from './components/Navigation.tsx';
import { Footer } from './components/Footer.tsx';
import { Toggle } from './components/Toggle.tsx';
import { Toggler } from './components/Toggler.tsx';
import { DetailPanels } from './components/DetailPanels.tsx';
import { ColorSelector } from './components/ColorSelector.tsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation>
        <a href="#developeers">Developers</a>
        <a href="#designers">Designers</a>
        <a href="#documentation">Documentation</a>
        <a href="#repo">Repo</a>
        <a href="#contact">Contact</a>
      </Navigation>

      <header>
        <h1>Accessibility Theme Builder</h1>
        <h2>Accessibility out of the box</h2>
      </header>

      <div className="details">
        <DetailPanels />

        <div className="example">
        <div className="example-top example-top-highlighted">
            <p><img src="/no-icon.svg" className="icon" />This example is not accessible</p>
          </div>
          <div className="example-top">
            <p><img src="/check-icon.svg" className="icon" />This example is accessible</p>
          </div>
          <div className="example-body">
            <p>Smallest <strong>AA accessible</strong> background/text size and color combo</p>
            <p>Lightest <strong>AA accessible</strong> background/text size and color combo</p>
            <p>Smallest <strong>AAA accessible</strong> background/text size/text color combination</p>
            <p>Lightest <strong>AAA accessible</strong> background/text size/text color combination</p>
          </div>
        </div>
      </div>

      <Footer>
        <ColorSelector />
        <Toggler name="Dyslexia Mode" />
      </Footer>
    </>
  )
}

export default App
