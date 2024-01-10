import { User } from "../models/User.js"

export class UserController {
    static async getAll(req, res) {
        const users = await User.findAll()
        res.json(users)

    }

    static async create(req, res) {
        const { name, lastname, email, password, dbirth, createdAt, updatedAt } = req.body 

        try {
            const createUser = await User.create({ name, lastname, email, password, dbirth, createdAt, updatedAt})
            res.json({ message: "User created." })
        } catch (error) {
            if (error.name == "SequelizeValidationError"){
                const validationError = error.errors.map(err => ({
                    field: err.path,
                    message: err.message
                }))

                res.status(400).json({errors: validationError})
            }
        }
    }

    static async getById(req, res) {
        const { id } = req.params
        const user = await User.findByPk(id)
        res.json(user)
    }

    static async update(req,res) {
        const {id} = req.params
        const {name, lastname, email, password, dbirth, createdAt, updatedAt} = req.body

        try {
            await User.update({name,lastname, email, password,dbirth,createdAt, updatedAt}, {where: {id: id}})
            res.json("User has been updated.")
        } catch (error) {
            if (error.name == "SequelizeValidationError"){
                const validationError = error.errors.map(err => ({
                    field: err.path,
                    message: err.message
                }))

                res.status(400).json({errors: validationError})
            }
        }
    }

    static async delete(req, res) {
        const {id} = req.params
        await User.destroy({where: {id:id}})
        res.json({message: "The user has been deleted."})
    }
}