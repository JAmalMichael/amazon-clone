import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import { useEffect } from "react";
import { auth } from "./firebase";


function App() {

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
    </Routes>
    </BrowserRouter>
  )
}

export default App
