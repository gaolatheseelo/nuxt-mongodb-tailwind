import getCategoryService from '../services/category/get'

import postCategoryService from '../services/category/post'

import putCategoryService from '../services/category/put'



const getCategory = async (req, res) => {
    try {
        res.status(200).json((await getCategoryService.all()))
    } catch (e) {
        res.status(500).json(e)
    }
}

const getCategoryById = async (req, res) => {
    try {
        res.json((await getCategoryService.byId(req.params.id)))
    } catch (e) {
        res.status(500).json(e)
    }
}

const createCategory = async (req, res) => {
    try {
        const {
            slug,
            locale,
            media:{
            icon,
            potrait,
            landscape,
            square,
            },
            settings:{
            is_premium,
            excluded_domains,
            excluded_countries_iso,
            excluded_network_endpoints,
            age_rating,
            },
            locks:{
            is_locked_for_editing,
            current_editor,
            is_locked_for_moderation_process,
            is_locked_for_backend_process,
            current_backend_process, 
            },
            parent_id,  
            ancestor_ids,
            product,
            path,
            is_indexed,
            published_at,
    
        } = req.body
        const newCategory = await postCategoryService.create({
            slug,
            locale,
            media:{
            icon,
            potrait,
            landscape,
            square,
            },
            settings:{
            is_premium,
            excluded_domains,
            excluded_countries_iso,
            excluded_network_endpoints,
            age_rating,
            },
            locks:{
            is_locked_for_editing,
            current_editor,
            is_locked_for_moderation_process,
            is_locked_for_backend_process,
            current_backend_process, 
            },
            parent_id,  
            ancestor_ids,
            product,
            path,
            is_indexed,
            published_at,
        })
        res.status(200).json(newCategory)
    } catch (e) {
        res.status(500).json(e)
    }
}

const updateCategoryById = async (req, res) => {
    try {
        const {
            slug,
            locale,
            media:{
            icon,
            potrait,
            landscape,
            square,
            },
            settings:{
            is_premium,
            excluded_domains,
            excluded_countries_iso,
            excluded_network_endpoints,
            age_rating,
            },
            locks:{
            is_locked_for_editing,
            current_editor,
            is_locked_for_moderation_process,
            is_locked_for_backend_process,
            current_backend_process, 
            },
            parent_id,  
            ancestor_ids,
            product,
            path,
            is_indexed,
            published_at,
        } = req.body
        console.log({
            id: req.params.id
        })
        const updateCategoryById = await putCategoryService.byId(req.params.id, {
            slug,
            locale,
            media:{
            icon,
            potrait,
            landscape,
            square,
            },
            settings:{
            is_premium,
            excluded_domains,
            excluded_countries_iso,
            excluded_network_endpoints,
            age_rating,
            },
            locks:{
            is_locked_for_editing,
            current_editor,
            is_locked_for_moderation_process,
            is_locked_for_backend_process,
            current_backend_process, 
            },
            parent_id,  
            ancestor_ids,
            product,
            path,
            is_indexed,
            published_at,
        })
        res.status(200).json(updateCategoryById)
    } catch (e) {
        res.status(500).json(e)
    }
}


export default {
    createCategory,
    getCategory,
    getCategoryById,
    updateCategoryById
}