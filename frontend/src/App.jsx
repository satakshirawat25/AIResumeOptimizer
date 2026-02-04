import React from 'react'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Admin from './components/Admin/Admin'
import History from './components/History/History'

const App = () => {
  return (
    <div className='App'>
      <Sidebar/>
      <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/admin' element={<Admin/>}/>
      </Routes>
     
    </div>
  )
}

export default App
