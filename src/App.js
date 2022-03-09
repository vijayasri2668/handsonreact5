import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Contact from './Contact'
import Navlinks from './Navlinks'
import Students from './Students'

const App = () => {
  return (
    <> 
        <Router>
            <Navlinks />
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/students' element={<Students /> } />
                <Route path='/students-list' element={<Students /> } />
                <Route path='/students-list/:id' element={<Students /> } />
                <Route path='/contact' element={<Contact /> } /> 
            </Routes>
        </Router>
    </>
  )
}

const Home=()=>(
    <div>
        <h1>Home Page</h1>
    </div>
)

export default App