import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Carts } from './pages/Carts'
import { About } from './pages/About'

import './App.css'

function App() {
  return (
    <div>
      <HashRouter>
      {/* <BrowserRouter> */}
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/carts' element={<Carts />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
        {/* </BrowserRouter> */}
      </HashRouter>
    </div>
  )
}

export default App
