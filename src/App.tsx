import './App.css'

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'


 
function App() {


  return (
    <Router basename='/dolla_website' >
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes >
    </Router>
  )
}

export default App
