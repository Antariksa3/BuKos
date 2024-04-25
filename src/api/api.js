import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL;

export const api = () => `${apiUrl}/api`;

// export const api = () => {
//     return 'http://127.0.0.1:8000/api'
//     return 'https://bukos.my.id/api'
// }

export const getReviewUser = async () => {
    const review = await axios.get(`${apiUrl}/api/review`)
    return review.data.reviews
}

export const getProduct = async () => {
    const productList = await axios.get(`${apiUrl}/api/allproduct`)
    console.log({ productList: productList.data.product })
    return productList.data.product
}

export const getNewestProduct = async () => {
    const newestProduct = await axios.get(`${apiUrl}/api/product-terbaru`);
    console.log(newestProduct.data.ProductTerbaru)
    return newestProduct.data.ProductTerbaru
}

export const getProductDetail = async (productId) => {
    const productDetail = await axios.get(`${apiUrl}/api/getoneproduct/${productId}`)
    return productDetail.data.data
}

export const getFavoriteProduct = async (token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const productFavorite = await axios.get(`${apiUrl}/api/getfavorite`, { headers })
    return productFavorite.data.favorites
}

export const searchAndFilterProducts = async (q, types = "", address = "", kecamatan = "") => {
    const params = new URLSearchParams();
    if (q) params.append('search_product', q);
    if (types) params.append('Filter_kos', types);
    if (address) params.append('search_desa', address);
    if (kecamatan) params.append('Filter_kecamatan', kecamatan);
    const searchTypes = await axios.get(`${apiUrl}/api/product/search?${params}`);
    return searchTypes.data;
}

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
}

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
}

export const getProductOwner = async (token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const productOwner = await axios.get(`${apiUrl}/api/productowner`, { headers })
    // return productOwner.data.product
    return productOwner.data?.product ?? [];
}

export const getUserTransaction = async (token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const detailUserTransaction = await axios.get(`${apiUrl}/api/transactions`, { headers })
    // console.log(detailUserTransaction.data.transactions)
    return detailUserTransaction.data.transactions
}

export const getOwnerTransaction = async (token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const detailOwnerTransaction = await axios.get(`${apiUrl}/api/orders/owners`, { headers })
    // console.log(detailOwnerTransaction.data.data)
    return detailOwnerTransaction.data.data
}