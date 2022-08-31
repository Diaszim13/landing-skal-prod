import './global.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Message } from './components/Message'
import { About } from './components/About'
import { Roadmap } from './components/Roadmap'
import { Updates } from './components/Updates'
import {Footer} from './components/Footer'
export function App() {
  return (
    <div className='App' id='top'>
      <Header />
      <Home />
      <Message />
      <a id='about'></a>
      <About />
      <a id='roadmap'></a>
      <Roadmap />
      {/* <Updates /> */}
      <Footer/>
    </div>
  )
}