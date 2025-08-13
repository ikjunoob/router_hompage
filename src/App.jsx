import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Board from './pages/Board'
import Home from './pages/Home'
import Notfound from './pages/NotFound'
import BoardDetail from './pages/BoardDetail'
import Footer from './components/Footer'
import Community from './pages/Community'

function App() {
  return (
    <div className="app-container">
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/board' element={<Board />} />
          <Route path='/board/:id' element={<BoardDetail />} />
          <Route path='/community' element={<Community />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
