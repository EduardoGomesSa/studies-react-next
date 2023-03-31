export default (req, res) => {
    if(req.method === "GET"){
        res.status(200).json({nome:"Eduardo"})
    }else{
        res.status(200).json({nome:"Dani"})
    } 
}