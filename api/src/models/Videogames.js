const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogames', {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
        
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      plataformas: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fechaDeLanzamiento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
   },
    {freezeTableName:true ,timestamps:false}
  );
};
