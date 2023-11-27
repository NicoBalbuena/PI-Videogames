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
            allowNull:true
        }
    },
    {freezeTableName:true ,timestamps:false}
    )
}