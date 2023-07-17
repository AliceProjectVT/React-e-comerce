import { useState } from "react";
import {CartWidget} from "./components/CartWidget";
import { NavBar } from "./components/NavBar";
import { ItemList } from "./components/ItemList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function app(){

    const [productoCarro, setearCarro] = useState([]);
    const [total, setTotal]= useState(0);
    const [contadorProductos, setearContador] = useState(0);



    return(
        <>
        <BrowserRouter>
        <NavBar 
        productoCarro = {productoCarro}
        setearCarro = {setearCarro}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setearContador ={setearContador} 
        />
        <Routes>
                <Route path="/" element={      
        <ItemList 
        productoCarro = {productoCarro}
        setearCarro = {setearCarro}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setearContador ={setearContador} 
        /> } />
             <Route path="/Abarrotes" element= {<ItemList/>}  />
                
                <Route path="*" element=" Que miras bobo, anda pa'lla bobo " />


        </Routes>
       
        </BrowserRouter>
        </>
    );

}

export default app;
//Mi ultima acción fué configurar la APP me falta configurar la generación de elementos en el ItemList