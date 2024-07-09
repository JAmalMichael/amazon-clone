import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import { useEffect } from "react";
import { auth } from "./firebase";
import Checkout from './components/Checkout'
import { useStateValue } from "./api/StateProvider";


function App() {

  const [dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />}/> 
        <Route path="/login" element={ <Login /> }/>
        <Route path="/checkout" element={ <Checkout /> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
