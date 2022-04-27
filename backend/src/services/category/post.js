import { Category } from '../../models/category'

const create = async (category) => Category.create(category)

export default {
    create
}