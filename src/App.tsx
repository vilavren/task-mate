import React from 'react'

import './App.css'
import TaskStore from './stores/TaskStore'

function App() {
  return (
    <div className="App">
      {TaskStore.tasks.map((t) => (
        <>{t.title}</>
      ))}
    </div>
  )
}

export default App
