import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { NavBar } from './Pages/Navbar'
function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
