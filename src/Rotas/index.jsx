import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "../Componets/Pages/Home";
import New from "../Componets/Pages/Adicionar"

export default function AplicationRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/new" element={<New/>}/>
            </Routes>
        </BrowserRouter>
    );
}