import {db} from "../../../Firebase"

import "./style-home.css"
import Navbar from "../../Header/NavBar/index"

import React, {useState, useEffect} from "react";
import { getDocs, collection, onSnapshot, query, QuerySnapshot } from "firebase/firestore";


export default function Home(){
    const [alunos, setAlunos] = useState({});
    const [notas, setNotas] = useState({})

    useEffect(() => {

        async function getAlunos(db){
            const q = query(collection(db, "turmaA"));
            onSnapshot(q, (querySnapshot)=>{
                setAlunos(querySnapshot.docs.map(doc => ({
                    nomes: doc.data()
                })))
            })
        }
         getAlunos(db)
    },[])


    
   

    // if(teste.legth != undefined){
    //     let i;
    //     for( i = 0; i < teste.legth; i++){
    //         console.log(teste.nomes.data[i])
    //     }
    // }

    return(
        <>
            <Navbar/>

            <div className="home">
                <ul className="subTitle-home">
                    <h1>Nomes</h1>
                    { alunos[0] &&
                        alunos.map((e) =>(
                            <li className="home-card" >
                                <h2>{e.nomes.nome + " " + e.nomes.sobrenome}</h2>
                            
                            </li> 
                    ))}
                </ul>

                <ul className="notas">
                <h1>Nota 1</h1>
                    {alunos[0] &&
                    alunos.map((e) =>(
                        <li className="home-card"><h2>{e.nomes.notas.nota1}</h2></li>

                    ))}
                </ul>

                <ul className="notas">
                <h1>Nota 2</h1>
                    {alunos[0] &&
                    alunos.map((e) =>(
                        <li className="home-card"><h2>{e.nomes.notas.nota2}</h2></li>

                    ))}
                </ul>

                <ul className="notas">
                <h1>Nota 3</h1>
                    {alunos[0] &&
                    alunos.map((e) =>(
                        <li className="home-card"><h2>{e.nomes.notas.nota3}</h2></li>

                    ))}
                </ul>

                <ul className="notas">
                <h1>Nota 4</h1>
                    {alunos[0] &&
                    alunos.map((e) =>(
                        <li className="home-card"><h2>{e.nomes.notas.nota4}</h2></li>

                    ))}
                </ul>
                
            </div>
            
        </>
    )
}
