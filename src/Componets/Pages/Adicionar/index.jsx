import React, { useState } from "react";

import {db} from "../../../Firebase"
import { collection, addDoc} from "firebase/firestore";
import { Link } from "react-router-dom";

import Voltar from "../../Imagens/arrow.png"

import "./style-adicionar.css"



export default function Adicionar(){

    const [nomeAluno, setNomeAluno] = useState("");
    const [sobrenomeAlnuno, setSobrenomeAluno] = useState("");
    const [nota1, setNota1] = useState();
    const [nota2, setNota2] = useState();
    const [nota3, setNota3] = useState();
    const [nota4, setNota4] = useState();


    const getAlunos = () => {
        if(nomeAluno && sobrenomeAlnuno && nota1 && nota2 && nota3 && nota4 !== ""){
            addDoc(collection(db, "turmaA"), {
                nome: nomeAluno,
                sobrenome: sobrenomeAlnuno,
                notas: {
                    nota1: nota1,
                    nota2: nota2,
                    nota3: nota3,
                    nota4: nota4
                }
              });
              //zerar os imputs
              setNomeAluno("");
              setSobrenomeAluno("");
              setNota1("");
              setNota2("");
              setNota3("");
              setNota4("");
          };
        }
        
    
    return(
            <div className="form-Adicionar">
                <Link className="voltar-adicionar" to={"/"}> <img src={Voltar} alt="Flecha"/></Link>
                {/* Colocar o valor ao escrever */}
                <label><h1>Nome do Aluno:</h1></label>
                <input type="text" placeholder="Digite o nome do Aluno(a)" value={nomeAluno} onChange={(e) => setNomeAluno(e.target.value)}/>
                <label ><h1>Sobrenome</h1></label>
                <input type="text" placeholder="Digite o sobrenome do Aluno(a)" value={sobrenomeAlnuno} onChange={(e) => setSobrenomeAluno(e.target.value)}/>
                
                <div className="notas-block">
                    <div>
                        <p>Nota 1</p>
                        <input className="notas-adicionar" type="number" placeholder="Digite a nota 1 do Aluno(a)" value={nota1} onChange={(e) => setNota1(parseFloat(e.target.value))}/>
                    </div>

                    <div>
                    <p>Nota 2</p>

                        <input className="notas-adicionar" type="number" placeholder="Digite a nota 1 do Aluno(a)" value={nota2} onChange={(e) => setNota2(parseFloat(e.target.value))}/>
                    </div>

                    <div>
                    <p>Nota 3</p>

                        <input className="notas-adicionar" type="number" placeholder="Digite a nota 1 do Aluno(a)" value={nota3} onChange={(e) => setNota3(parseFloat(e.target.value))}/>
                    </div>

                    <div>
                        <p>Nota 4</p>

                        <input className="notas-adicionar" type="number" placeholder="Digite a nota 1 do Aluno(a)" value={nota4} onChange={(e) => setNota4(parseFloat(e.target.value))}/>
                    </div>
                </div>
                
                <button className="enviar-adicionar" onClick={getAlunos} >Enviar</button>
            </div>

    );

}