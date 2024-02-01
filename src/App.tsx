import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/"/>
            <Route path="/home"/>
            <Route path="/categoria"/>
            <Route path="/cadastroCategoria"/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
