import logo from './logo.svg';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import MyPortfolio from './Pages/My Portfolio/MyPortfolio';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/RegisterSystem/Login/Login';
import Singnup from './Pages/RegisterSystem/Singnup/Singnup';
import SingleProductDetails from './Pages/SingleProductDetails/SingleProductDetails';
import RequireAuth from './Pages/RegisterSystem/RequireAuth/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import DashBoard from './Pages/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/tool/:id' element={<RequireAuth><SingleProductDetails></SingleProductDetails></RequireAuth>}></Route>
      <Route path='/Purchase' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      <Route path="dashboard" element={<RequireAuth><DashBoard /></RequireAuth>} >
        </Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Singnup></Singnup>}></Route>
      <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
