// import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Ap from './App'
import Pay from "./Pay";
import Topbar from "./admin_panel/components/topbar/Topbar";
import Sidebar from "./admin_panel/components/sidebar/Sidebar";
import './app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./admin_panel/pages/home/Home";
import UserList from "./admin_panel/pages/UserList/UserList";
import User from "./admin_panel/pages/user/User";
import NewUser from "./admin_panel/pages/newUser/NewUser";
import ProductListA from "./admin_panel/pages/productList/ProductListA"
import ProductA from "./admin_panel/pages/product/ProductA"
import NewProductA from "./admin_panel/pages/newProduct/NewProductA"




const App = () => {
 return (  
 <Router>
  <Topbar/>
  <div className='container'>
   <Sidebar/>
   <Routes>
      <Route path='/' element = {<Home />} />
   
      <Route path='/users' element = {<UserList />} />
      <Route path='/user/:userId' element = {<User />} />
      <Route path='/newUser' element = {<NewUser />} />
      <Route path='/products' element = {<ProductListA />} />
       <Route path='/product/:productId' element = {<ProductA />} />
      <Route path='/newProduct' element = {<NewProductA />} />

   </Routes>
   </div>
  
  </Router>
 
 )

};

export default App;
