import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Info from './Info';
import Report from './Report';
import { BrowserRouter , Routes ,Route} from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Info' element={<Info />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Report' element={<Report />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
