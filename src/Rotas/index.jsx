import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "../Componets/Pages/Home";

export default function AplicationRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}/>

            </Routes>
        </BrowserRouter>
    );
}