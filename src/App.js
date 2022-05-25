import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Component/Home/Header/Header';
import ProduchDetailsmain from './Component/Home/ProductDetails/ProduchDetailsmain';
import ConfirmOrder from './Component/Home/ConfirmOrder/ConfirmOrder';
import Login from './Component/Login/Login';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './Component/Login/PrivateRoute';
import AddNewProduct from './Component/Admin/AddNewProduct/AddNewProduct';
import NewColletion from './Component/Home/NewColletion/NewColletion';
import OrderReview from './Component/Home/OrderReview/OrderReview';
import CustomersOrder from './Component/Admin/CustomersOrder/CustomersOrder';
import AdminHome from './Component/Admin/adminHome.js/AdminHome';
import AddFavourite from './Component/Home/AddFavourite/AddFavourite';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUsers] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(loggedInUser));
  }, [loggedInUser]);
  return (

    <div className="">
      <UserContext.Provider value={[loggedInUser, setLoggedInUsers]}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Header></Header>} />
            <Route path="/productDetils/:ID" element={<ProduchDetailsmain></ProduchDetailsmain>} />
            <Route element={<PrivateRoute />}>
              <Route path="/confirmOrder/:conID" element={<ConfirmOrder></ConfirmOrder>}></Route>
            </Route>
            <Route exact path='/addnewproduct' element={<AddNewProduct></AddNewProduct>} />
            <Route exact path='/login' element={<Login></Login>} />
            <Route exact path='/newProduct' element={<NewColletion></NewColletion>} />
            <Route exact path='/orderReview' element={<OrderReview />} />
            <Route exact path='/CustomersOrder' element={<CustomersOrder />} />
            <Route exact path='/AddFavourite' element={<AddFavourite/>} />
            <Route exact path='/admin' element={<AdminHome/>} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>

  );
}

export default App;
