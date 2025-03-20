import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Register from './components/Register'
import Downloads from './components/Downloads'
import Home from './components/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/downloads" element={<Downloads/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
