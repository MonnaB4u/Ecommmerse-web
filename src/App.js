import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Component/Home/Header/Header';
import ProduchDetailsmain from './Component/Home/ProductDetails/ProduchDetailsmain';
import ConfirmOrder from './Component/Home/ConfirmOrder/ConfirmOrder';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>

        <Route exact path='/' element={<Header></Header>}/>
        <Route path="/productDetils:ID" element={<ProduchDetailsmain></ProduchDetailsmain>}/>
        <Route path="/confirmOrder:conID" element={<ConfirmOrder></ConfirmOrder> }/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
