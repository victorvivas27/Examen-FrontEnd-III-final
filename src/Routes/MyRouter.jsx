import { Route, Routes } from "react-router-dom"
import MyLayout from "../layout/MyLayout"
import Home from "../Components/pages/home/Home"
import Contact from "../Components/pages/contact/Contact"
import Errorpages from "../Components/pages/error/ErrorPages"
import Favs from "../Components/pages/favs/Favs"
import Detail from "../Components/pages/detail/Detail"




const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<MyLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
         </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpages />} />
      </Routes>
    </>
  )
};

export default MyRouter;