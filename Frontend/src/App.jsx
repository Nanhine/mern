
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import About from './component/About'
import Counter from './component/Counter'
import Navbar from './component/Navbar'
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import UseRef from './Hooks/UseRef'
import UseState from './Hooks/UseState'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Service from './pages/Service'
import { Route,Routes } from 'react-router-dom'
const App = () => { 
  return (
   <>
   <Navbar />
   <Routes>
    <Route path='/'element={<Home name="nandu"/>}/>
    <Route path='/about' element={<About name="nandu" age={20} dept="CSE-DS"/>}></Route>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    {/*Hooks*/}
    <Route path='/hook' element={<Hook/>}>
     <Route path='useState' element={<UseState/>}/>
     <Route path='useEffect' element={<UseEffect/>}/>
     <Route path='useEffectApi' element={<UseEffectApi/>}/>
     <Route path='useref' element={<UseRef/>}/>
    
    </Route>
    
     
   </Routes>
   </>
  )
}

export default App
