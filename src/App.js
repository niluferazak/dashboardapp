import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/pages/Products";
import Customers from "./components/pages/Customers";
import Shop from "./components/pages/Shop";
import Income from "./components/pages/Income";
import Promote from "./components/pages/Promote";

function App() {
  return (
    <div >
     <Topbar/>
     <div className="container">



     <Sidebar/>
     <BrowserRouter>
     <Routes>
     <Route path="/home" element={<Home/>}/>

   
     <Route path="/products" element = {<Products/>}/>
     <Route path="/customers" element = {<Customers/>}/>
     <Route path="/shop" element = {<Shop/>}/>
     <Route path="/income" element = {<Income/>}/>
     <Route path="/promote" element = {<Promote/>}/>

     </Routes>
     </BrowserRouter>
    
      
     


      

     
    </div>

    </div>
  );
}

export default App;
