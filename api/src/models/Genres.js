const {DataTypes}=require('sequelize')

module.exports=(sequilize)=>{
    sequilize.define('Genres',{
        id: {
            type: DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
            
          },
        pepito:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            allowNull:true
        }
    },
    {freezeTableName:true ,timestamps:false}
    )
}