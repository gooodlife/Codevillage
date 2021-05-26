import React from 'react'
import AppRouter from './AppRouter'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='layout'>
      <Sidebar />
    <div className= 'dashBoardFlexContainer'>
      <Navbar/>
      <AppRouter />
      </div>  
    </div>
  )
}

export default App
