import axios from 'axios'

export const CATEGORY_API =
    'https://626d69e8034ec185d332c052.mockapi.io/categories'
export const PRODUCT_API =
    'https://626d69e8034ec185d332c052.mockapi.io/products'

export const getAllCategories = () => {
    return axios.get(CATEGORY_API)
}

export const getCategoryById = (id) => {
    return axios.get(CATEGORY_API, {
        params: {
            id: id,
        },
    })
}

export const getAllProducts = () => {
    return axios.get(PRODUCT_API)
}

export const getProductById = (id) => {
    return axios.get(PRODUCT_API, {
        params: {
            id: id,
        },
    })
}

export const getProductByCategory = (categoryId) => {
    return axios.get(PRODUCT_API, {
        params: {
            categoryid: categoryId,
        },
    })
}

export default {
    CATEGORY_API,
    PRODUCT_API,
    getAllCategories,
    getAllProducts,
    getCategoryById,
    getProductById,
    getProductByCategory,
}
