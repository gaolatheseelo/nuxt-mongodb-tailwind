import { Category } from '../../models/category'

const all = async () => Category.find({})

const byId = async (_id) => Category.find({ _id })

export default {
    all,
    byId
}