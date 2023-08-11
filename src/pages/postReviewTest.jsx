import React, { useState } from 'react'
import UploadWidget from '../components/UploadWidget/UploadWidget'
import axios from 'axios'
import { api } from '../api/api'

const PostReviewTest = () => {
    const [fotoReview, setFotoReview] = useState(null)
    const [namaReview, setNamaReview] = useState('')
    const [reviewDesc, setReviewDesc] = useState('')

    const handleFotoReviewSelect = (file) => {
        setFotoReview(file)
    }
    const handleFotoReviewRemove = () => {
        setFotoReview(null)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')

        try {
            const response = await axios.post(api() + '/addreview', {
                nama_review: namaReview,
                profile_review: fotoReview,
                review_desc: reviewDesc
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            })

            console.log('Response:', response.data);

        } catch (error) {
            console.error()
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <UploadWidget onFileSelect={handleFotoReviewSelect} onRemove={handleFotoReviewRemove} preview={fotoReview} />
                <input type="text" value={namaReview} onChange={(e) => setNamaReview(e.target.value)} />
                <input type="text" value={reviewDesc} onChange={(e) => setReviewDesc(e.target.value)} />
                <button type='submit'>Kirim</button>
            </form>
        </div>
    )
}

export default PostReviewTest
