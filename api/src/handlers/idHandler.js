const {}=require("../controllers/genController");
const { getById } = require("../controllers/idController");

const idHandler=async(req,res)=>{
    const {id}=req.params
    try {
        const response=await getById(id);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports={
   idHandler
}