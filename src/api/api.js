import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const api = () =>{
    return 'http://127.0.0.1:8000/api'
}

export const getReviewUser = async () => {
    const review = await axios.get(`${apiUrl}/api/review`)
    return review.data.reviews
}

export const getProduct = async () => {
    const product = await axios.get(`${apiUrl}/api/product`)
    // console.log({productList: product})
    return product.data.products
}