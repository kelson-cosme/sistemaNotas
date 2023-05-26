import {db} from "../../../Firebase"

import "./style-home.css"
import Navbar from "../../Header/NavBar/index"

import React, {useState, useEffect} from "react";
import { collection, onSnapshot, query, updateDoc, doc} from "firebase/firestore";

let identificador;

export default function Home(){
    const [alunos, setAlunos] = useState({});
    const [atualizarAlunos, setAtualizarAlunos] = useState([]);
    const [atualizarSobrenome, setAtualizarSobrenome] = useState([]);
    const [atualizarNotas1, setAtualizarNotas] = useState([]);
    const [atualizarNotas2, setAtualizarNotas2] = useState([]);
    const [atualizarNotas3, setAtualizarNotas3] = useState([]);
    const [atualizarNotas4, setAtualizarNotas4] = useState([]);


    
    function pegarId(a){
        identificador = a.id;
        setAtualizarAlunos(a.nomes.nome);
        setAtualizarSobrenome(a.nomes.sobrenome)
        setAtualizarNotas(a.nomes.notas.nota1)
        setAtualizarNotas2(a.nomes.notas.nota2)
        setAtualizarNotas3(a.nomes.notas.nota3)
        setAtualizarNotas4(a.nomes.notas.nota4)
    }



    const updateData = () => {
        const teste = doc(db, "turmaA", identificador);
        updateDoc(teste, {
        nome: atualizarAlunos,
        sobrenome: atualizarSobrenome,
        notas:{
            nota1: atualizarNotas1,
            nota2: atualizarNotas2,
            nota3: atualizarNotas3,
            nota4: atualizarNotas4,

        }
        });
        zerarInputs();
    }


    useEffect(() => {

        async function getAlunos(db){
            const q = query(collection(db, "turmaA"));
            onSnapshot(q, (querySnapshot)=>{
                setAlunos(querySnapshot.docs.map(doc => ({
                    nomes: doc.data(),
                    id: doc.id
                })))
            })
        }
         getAlunos(db)

    },[])
    

    // zerar os valores dos inputs
    function zerarInputs(){
        setAtualizarAlunos("");
        setAtualizarSobrenome("")
        setAtualizarNotas("")
        setAtualizarNotas2("")
        setAtualizarNotas3("")
        setAtualizarNotas4("")
        identificador = ""
    }


    return(
        <section className="corpo-home">
            <Navbar/>

            {/* Input irá aparecer após querer atualizar alguma informação */}
            <div>
                <input className="notas-adicionar" type="text" placeholder="Digite a nota 1 do Aluno(a)" value={atualizarAlunos} onChange={(e) => setAtualizarAlunos(e.target.value)}/>
            </div>

            <div>
                <input className="notas-adicionar" type="text" placeholder="Digite a nota 1 do Aluno(a)" value={atualizarSobrenome} onChange={(e) => setAtualizarSobrenome(e.target.value)}/>
            </div>

            <div>
                <input className="notas-adicionar" type="number" placeholder="Digite a nota 1 do Aluno(a)" value={atualizarNotas1} onChange={(e) => setAtualizarNotas(parseFloat(e.target.value))}/>
            </div>

            <div>
                <input className="notas-adicionar" type="number" placeholder="Digite a nota 1 do Aluno(a)" value={atualizarNotas2} onChange={(e) => setAtualizarNotas2(parseFloat(e.target.value))}/>
            </div>

            <div>
                <input className="notas-adicionar" type="number" placeholder="Digite a nota 1 do Aluno(a)" value={atualizarNotas3} onChange={(e) => setAtualizarNotas3(parseFloat(e.target.value))}/>
            </div>

            <div>
                <input className="notas-adicionar" type="number" placeholder="Digite a nota 1 do Aluno(a)" value={atualizarNotas4} onChange={(e) => setAtualizarNotas4(parseFloat(e.target.value))}/>
            </div>
            
            <button onClick={updateData}>Atualizar</button>


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
                    alunos.map((e, ) =>(
                        <ul className="home-card card-home ">
                            <li className="home-nome"><h2>{e.nomes.nome + " "+ e.nomes.sobrenome}</h2></li>
                            <li className="home-nota">{e.nomes.notas.nota1}</li>
                            <li className="home-nota">{e.nomes.notas.nota2}</li>
                            <li className="home-nota">{e.nomes.notas.nota3}</li>
                            <li className="home-nota">{e.nomes.notas.nota4}</li>
                            <li className="botao-home"><button onClick={() => pegarId(e)}>Editar</button></li>
                        </ul>
                ))}
            </div>
            
        </section>
    )
}
