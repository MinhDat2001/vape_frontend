import axios from 'axios';

const token =
    'Vape ' +
    document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

export const GET_ALL_CATEGORY = 'http://localhost:8088/categories';
export const GET_CATEGORY_BY_ID = 'http://localhost:8088/category';
export const UPDATE_CATEGORY = 'http://localhost:8088/category';
export const CREATE_CATEGORY = 'http://localhost:8088/category';

export const getAllCategory = () => {
    // let res = null;
    axios
        .get(GET_ALL_CATEGORY, {
            headers: {
                token: token,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                // console.log(response);
                return response;
            }
        })
        .catch((error) => {
            console.log(error);
        });

    // return res;
};

export default {
    GET_ALL_CATEGORY,
    UPDATE_CATEGORY,
    CREATE_CATEGORY,
    getAllCategory,
};
