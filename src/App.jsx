import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./components/Footer"
import MobileIndex from "./Pages/MobileIndex"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="w-full h-full text-white">
      <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile/:id" element={<MobileIndex />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  )
}

export default App
