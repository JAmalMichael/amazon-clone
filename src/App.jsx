import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"


function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />}/> 
        <Route path="/login" element={ <Login /> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
