import React from 'react'
import AddTask from "./AddTask"
import TaskList from './TaskList'
import TaskProvider from './TaskProvider'
const App_Reduce = () => {
  return (
    <>
        
      <TaskProvider>
        <h1>Dialy tasks</h1>
        <AddTask/>
        <TaskList/>

      </TaskProvider>
    </>
  )
}

export default App_Reduce
