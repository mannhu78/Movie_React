import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import MovieDetail from "./pages/MovieDetail/MovieDetail"
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <BrowserRouter>


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/movie/:id" element={<MovieDetail />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App