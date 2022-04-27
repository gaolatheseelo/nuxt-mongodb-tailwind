import { Category } from '../../models/category'

const byId = async (id, category) => Category.findByIdAndUpdate(id, category)

export default {
    byId
}