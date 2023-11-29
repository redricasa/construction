import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Materials from "./screens/MaterialsScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/HomePageScreen";
import Register from "./screens/RegisterUserScreen";
import LoginUser from "./screens/LoginUserScreen";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function App() {
  return (

    <>
      <Header />
      <ToastContainer />
      <Container className="my-2">
        < Outlet />
      </Container>
      <Footer />
    </>

  ) 
  
}

export default App
