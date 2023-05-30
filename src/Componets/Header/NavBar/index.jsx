
import "./style-navBar.css"

import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <>
            <div className="title"><p>Alunos da Turma</p>

                <div className="criar-navBar"><button><Link to={"/new"} >Novos Alunos</Link></button></div>
            </div>                
        </>
    )
}
