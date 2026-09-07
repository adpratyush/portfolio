import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import ContentArea from './components/ContentArea'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // We could use an IntersectionObserver or just simple state mapping 
  // for when sections scroll into view.

  return (
    <div className="app-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <ContentArea activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  )
}

export default App
