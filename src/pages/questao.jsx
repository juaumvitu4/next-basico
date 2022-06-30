import { useEffect, useState } from "react"

export default function questap() {
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/1234')
        .then(resp => resp.json())
        .then(setQuestao)
    }, [])


    function renderizarRespostas() {
        if(questao) {
            return questao.resposta.map(resp =>{
                return <li key={resp}>{resp}</li>
            })
        }
        return false
    }
    return (
        <div>
            <h1>Questão</h1>
        <div>
            <span>{questao?.enunciado}</span>

            <ul>                
                    {renderizarRespostas()}                
            </ul>
        </div>
        </div>
    )
}