const {DataTypes}=require('sequelize')
module.exports=(sequilize)=>{
    sequilize.define('Genres',{
        id: {
            type: DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
            
          },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {freezeTableName:true ,timestamps:false}
    )
}