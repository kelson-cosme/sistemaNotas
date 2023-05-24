import {db} from "../../../Firebase"

import "./style-home.css"
import Navbar from "../../Header/NavBar/index"

import React, {useState, useEffect} from "react";
import { getDocs, collection, onSnapshot, query, QuerySnapshot } from "firebase/firestore";


export default function Home(){
    const [name, setName] = useState({});
    const [name2, setName2] = useState({});

    useEffect(() => {

        async function getAlunos(db){
            const q = query(collection(db, "turmaA"));
            onSnapshot(q, (querySnapshot)=>{
                setName(querySnapshot.docs.map(doc => ({
                    nomes: doc.data()
                })))
            })
           
        }
         getAlunos(db)
        
    },[])

    if(name.length >0 ){
       setName2(name.forEach(element => {
        `<div>daad</div>`
    }))
    }
    
    
        
        // name.forEach((doc) => {
        //   console.log(doc.data.nome)
        // });

    return(
        <>
            <Navbar/>


            <ul className="subTitle-home">
                <li><h1>a</h1></li>
                <li><h1>Nota1</h1></li>
                <li><h1>Nota2</h1></li>
                <li><h1>Nota3</h1></li>
                <li><h1>Nota4</h1></li>
                <li><h1>Situação</h1></li>
            </ul>
        
            





        </>
    )
}
