import React from 'react'
import TemplateView from './Components/TemplateView'
import { ResumeProvider } from './Context/ResumeContext'
import './App.css'

function App() {
  return (
    <ResumeProvider>
      <div>
        <TemplateView />
      </div>
    </ResumeProvider>
  )
}

export default App