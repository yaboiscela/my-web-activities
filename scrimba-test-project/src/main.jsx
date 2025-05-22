import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BodyReactFax />
  //<Page />
)

function BodyReactFax() {
  return(
    <>
    <header className='react-header'>
        <img src='src/assets/react.svg' className='react-logo'></img>
        <h2>ReactFacts</h2>
    </header>
    <body className='react-fax-body'>
      <h1 className='react-title'>Fun facts about React</h1>
      <ul className='react-list'>
        <li>Was first introduced in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </body>
    </>
  )
}

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function Page(){
  return(
    <>
    <Header />
    <MainContent />
    <Footer />
    </>
  )
}
