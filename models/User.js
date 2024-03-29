import { Sequelize, DataTypes } from "sequelize";
import "dotenv/config"

const db = new Sequelize(process.env.DB, process.env.DB_USERNAME, process.env.DB_PASSWORD , {
    host: process.env.HOST,
    dialect: 'mysql'
})

try {
    await db.authenticate()
    console.log("Conection is established good")
} catch (error) {
    console.log("Unable to connect to database");
}

export const User = db.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                args: true,
                msg:"The name is required."
            }
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                args: true,
                msg:"The lastname is required."
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                args: true,
                msg:"The email is required."
            },
            isEmail: {
                args: true,
                msg: "Email invalid format."
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notNull: {
                args: true,
                msg:"The email is required."
            }
        }
    },
    dbirth: {
        type: DataTypes.DATE,
        allowNull:false
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }

})
