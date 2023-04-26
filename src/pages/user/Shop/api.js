import axios from 'axios';
export const HOST = 'localhost:8088';
export const CATEGORY_GET_ALL = 'http://localhost:8088/categories';
export const PRODUCTS_BY_CATEGORY = 'http://localhost:8088/products';

export const getAllCategories = () => {
    return axios.get(CATEGORY_GET_ALL);
};

export const getCategoryById = (id) => {
    return axios.get(CATEGORY_GET_ALL, {
        params: {
            id: id,
        },
    });
};

export const getAllProducts = () => {
    return axios.get(PRODUCTS_BY_CATEGORY);
};

export const getProductById = (id) => {
    return axios.get(PRODUCTS_BY_CATEGORY, {
        params: {
            id: id,
        },
    });
};

export const getProductByCategory = (categoryId) => {
    return axios.get(PRODUCTS_BY_CATEGORY, {
        params: {
            categoryid: categoryId,
        },
    });
};

export default {
    CATEGORY_GET_ALL,
    PRODUCTS_BY_CATEGORY,
    getAllCategories,
    getAllProducts,
    getCategoryById,
    getProductById,
    getProductByCategory,
};
