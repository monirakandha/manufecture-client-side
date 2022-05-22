import logo from './logo.svg';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import MyPortfolio from './Pages/My Portfolio/MyPortfolio';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
