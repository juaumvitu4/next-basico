export default function questao(req, res) {
    if(req.method === "GET") {
       get(req, res)
} else {
    res.status(405).send()
}
}

function get(req, res) {
    if(req.method === "GET") {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'Qual sua cor preferida?',
            resposta: [
            'Azul', 'Vermelho', 'Verde'
        ]
        })
    }
}
