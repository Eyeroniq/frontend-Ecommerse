import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import  NavBar  from './Pages/Navbar'
import { Option2 } from './Pages/Option2'
import { Option1 } from './Pages/Option1'
import { Option4 } from './Pages/Option4'
import { Option3 } from './Pages/Option3'
function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Option1" element={<Option1 />}/>
      <Route path="/Option2" element={<Option2 />}/>
      <Route path="/Option3" element={<Option3 />}/>
      <Route path="/Option4" element={<Option4/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
