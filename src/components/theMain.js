import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Home from '../components/Home/Home'
import transition from '../transition'

const theMain = () => (

    
    <div className='between'>

         <Sidebar/>
         <Home/>
       
       </div>
     
      
     )

export default transition (theMain)
