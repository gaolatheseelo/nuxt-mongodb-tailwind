const mongoose = require("mongoose")


const localeSchema = new mongoose.Schema({
    language_iso: String,
    title: String,
    seo_title: String,
    summary: String,
    seo_summary: String,
    description: String,
    seo_description: String,
    specify_seo_values: String,
})

const categorySchema = new mongoose.Schema({
    slug: String,
    locale: [localeSchema],
    media:{
        icon: String,
        potrait: [String],
        landscape: [String],
        square: [String],
    },
    settings:{
        is_premium: Boolean,
        excluded_domains: [String],
        excluded_countries_iso: [String],
        excluded_network_endpoints: [Number],
        age_rating: String,
    },
    locks:{
        is_locked_for_editing: String,
        current_editor: String,
        is_locked_for_moderation_process: String,
        is_locked_for_backend_process: String,
        current_backend_process: String, 
    },
    parent_id: mongoose.SchemaTypes.ObjectId,  
    ancestor_ids: [String],
    product: String,
    path: String,
    is_indexed: Boolean,
    published_at: Date,
    created_at: Date,
    updated_at: Date,
})

module.exports =mongoose.model("category",categorySchema)