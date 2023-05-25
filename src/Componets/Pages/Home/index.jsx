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



    return(
        <>
            <Navbar/>

                {alunos[0] &&
                    alunos.map((e) =>(
                        <ul className="home-card"><h2>{e.nomes.nome}</h2>
                            <li>{e.nomes.notas.nota1}</li>
                            <li>{e.nomes.notas.nota2}</li>
                            <li>{e.nomes.notas.nota3}</li>
                            <li>{e.nomes.notas.nota4}</li>
                        </ul>
                ))}
        </>
    )
}
