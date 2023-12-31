import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/products" Component={Products} />
    </Routes>
  </BrowserRouter>
)

export default App
