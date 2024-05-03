import React from 'react'
import { BrowserRouter as Router  , Routes , Route } from "react-router-dom";
import ContextProvider from './context/Context';
import "./App.css"
import Signup from './components/sign/Signup';
import TheMain from './components/theMain';
import Login from './components/sign/login';
import { AnimatePresence } from 'framer-motion';


const App = () => (

<ContextProvider>
 <Router>
 <AnimatePresence mode='wait'>
    <Routes>
    <Route path='/' element={<TheMain/>} />

      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Login/>} />
    </Routes>
    </AnimatePresence>
  </Router>

  </ContextProvider>
   
  )

 
export default App



