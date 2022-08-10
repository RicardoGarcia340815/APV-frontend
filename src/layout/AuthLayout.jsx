import {Outlet} from "react-router-dom";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

const AuthLayout = () => {
  return (
    <>
        
      <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-10 p-5 items-center">
        
        <Outlet />

      </main>
      
      
    </>
  )
}

export default AuthLayout;