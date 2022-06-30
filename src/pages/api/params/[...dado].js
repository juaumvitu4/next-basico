export default function params(req, res){
    res.status(200).json ({
        params: req.query
    })

}
///http://localhost:3000/api/params/a/b/c/v