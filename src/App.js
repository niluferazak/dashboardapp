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
     
     <Routes>
     <Route  exact path="/home" element={<Home/>}/>

   
     <Route exact path="/products" element = {<Products/>}/>
     <Route  exact path="/customers" element = {<Customers/>}/>
     <Route  exact path="/shop" element = {<Shop/>}/>
     <Route  exact path="/income" element = {<Income/>}/>
     <Route  exact path="/promote" element = {<Promote/>}/>

     </Routes>
     
    
      
     


      

     
     </div>

    </div>
  );
}

export default App;
