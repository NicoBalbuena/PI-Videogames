const {getAllGenresDB}=require("../controllers/genController")

const getGenresHandler=async(req,res)=>{
    try {
        const response=await getAllGenresDB();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports={
    getGenresHandler
}