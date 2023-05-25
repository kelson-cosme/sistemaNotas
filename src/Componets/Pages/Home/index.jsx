import {db} from "../../../Firebase"

import "./style-home.css"
import Navbar from "../../Header/NavBar/index"

import React, {useState, useEffect} from "react";
import { getDocs, collection, onSnapshot, query, QuerySnapshot } from "firebase/firestore";


export default function Home(){
    const [alunos, setAlunos] = useState({});
    const [CustomersData, setCustomersData] = useState([])

    useEffect(() => {

        async function getAlunos(db){
            const q = query(collection(db, "turmaA"));
            onSnapshot(q, (querySnapshot)=>{
                setAlunos(querySnapshot.docs.map(doc => ({
                    nomes: doc.data()
                })))
            })
        
            const querySnapshot = await getDocs(q);
            setCustomersData(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))

            console.log(CustomersData)


        }
         getAlunos(db)

    },[])



    return(
        <section className="corpo-home">
            <Navbar/>

            <div className="valores-home">
                <ul className="home-card title-home">
                    <li className="home-nome"><h3>Nome</h3></li>
                    <li className="home-nota"><h3>Nota 1</h3></li>
                    <li className="home-nota"><h3>Nota 2</h3></li>
                    <li className="home-nota"><h3>Nota 3</h3></li>
                    <li className="home-nota"><h3>Nota 4</h3></li>
                    <li className="home-nota"><h3>Editar</h3></li>

                </ul>

                {alunos[0] &&
                    alunos.map((e) =>(
                        <ul className="home-card card-home ">
                            <li className="home-nome"><h2>{e.nomes.nome + " "+ e.nomes.sobrenome}</h2></li>
                            <li className="home-nota">{e.nomes.notas.nota1}</li>
                            <li className="home-nota">{e.nomes.notas.nota2}</li>
                            <li className="home-nota">{e.nomes.notas.nota3}</li>
                            <li className="home-nota">{e.nomes.notas.nota4}</li>
                            <li className="botao-home"><button>Editar</button></li>
                        </ul>
                ))}
            </div>
            
        </section>
    )
}
