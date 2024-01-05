import { User } from "../models/User.js"

export class UserController {
    static async getAll(req, res) {

        const users = await User.findAll({
            attributes: [
                [User.sequelize.fn('BIN_TO_UUID', User.sequelize.col('id')), 'id'],
                'name',
                'lastname',
                'email',
                'password',
                'dbirth',
                'createdAt',
                'updatedAt',
            ]
        })

        res.json(users)
    }

    static async create(req, res) {
        const { name, lastname, email, password, dbirth, createdAt, updatedAt } = req.body

        const createUser = await User.create({ name, lastname, email, password, dbirth, createdAt, updatedAt })
        res.json({message: "User created."})
    }
}