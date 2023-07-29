import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const api = () => {
    return 'http://127.0.0.1:8000/api'
}

export const getReviewUser = async () => {
    const review = await axios.get(`${apiUrl}/api/review`)
    return review.data.reviews
}

export const getProduct = async () => {
    const productList = await axios.get(`${apiUrl}/api/allproduct`)
    // console.log({ productList: productList })
    return productList.data.product
}

export const searchAndFilterProducts = async (q, types = "") => {
    const searchTypes = await axios.get(`${apiUrl}/api/product/search?Search=${q}&Filter=${types}`);
    return searchTypes.data;
};

export const getOwnerDetail = async (token) => {
    try {
        const endpoint = `${apiUrl}/api/owner/detail`;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const ownerData = await axios.get(endpoint, { headers });
        return ownerData.data;
        // console.log({ ownerData: owner.data })
    } catch (error) {
        console.error('Error fetching owner detail:', error);
        throw error;
    }
};

export const getUserDetail = async (token) => {
    try {
        const endpoint = `${apiUrl}/api/user`;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const userData = await axios.get(endpoint, { headers });
        return userData.data;
        // console.log({ ownerData: owner.data })
    } catch (error) {
        console.error('Error fetching owner detail:', error);
        throw error;
    }
};

// export const getUserData = async (token) => {
//     try {
//         const user = await axios.get(`${apiUrl}/api/user/`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         console.log({ userList: user.data }); // Menampilkan data user di console (opsional)
//         return user.data; // Mengembalikan data user dari permintaan ke server
//     } catch (error) {
//         // console.error('Error fetching user data:', error);
//         throw error;
//     }
// }