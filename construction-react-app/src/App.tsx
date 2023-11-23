import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Materials from "./screens/MaterialsScreen";
import Tools from "./screens/ToolsScreen";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./screens/HomePageScreen";
import Register from "./screens/RegisterUserScreen";
import LoginUser from "./screens/LoginUserScreen";



function App() {
  return (

    <>
      <Header />
      <Container className="my-2">
        < Outlet />
      </Container>
      <Footer />
    </>

  ) 
  
}

export default App
