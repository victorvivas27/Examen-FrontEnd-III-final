import { Outlet } from "react-router-dom"
import Footer from "../Components/common/footer/Footer"
import Navbar from "../Components/common/navbar/Navbar"
const MyLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MyLayout