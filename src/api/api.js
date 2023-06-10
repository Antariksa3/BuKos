import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const api = () =>{
    return 'https://aa28-103-28-113-244.ngrok-free.app/api'
}

export const getReviewUser = async () => {
    const review = await axios.get(`https://aa28-103-28-113-244.ngrok-free.app/api/review`)
    console.log({reviewList: review})
}