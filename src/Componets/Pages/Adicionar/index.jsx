import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import {db} from "../../../Firebase"
import { collection, addDoc , query, setDoc} from "firebase/firestore";


import "./style-adicionar.css"
import { getApp } from "firebase/app";



export default function Adicionar(){

    const [nomeAluno, setNomeAluno] = useState("");
    const [nota1, setNota1] = useState("");

    const getAlunos = () => {
        const docRef = addDoc(collection(db, "turmaA"), {
            nome: nomeAluno,
            sobrenome: nota1,
            notas: {
                nota1: nota1,
                nota2: nota1,
                nota3: nota1,
                nota4: nota1
            }
          });
          setNomeAluno("");
          setNota1("");
      };
    

        
    return(
            <div className="form-Adicionar">
                <input type="text" placeholder="Digite o nome do Aluno(a)" value={nomeAluno} onChange={(e) => setNomeAluno(e.target.value)}/>
                <input type="text" placeholder="Digite a nota 1 do Aluno(a)" value={nota1} onChange={(e) => setNota1(e.target.value)}/>
                <button onClick={getAlunos} >Enviar</button>
            </div>

    );

}