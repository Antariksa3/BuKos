import React from 'react'
import '../assets/styles/notFound.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () =>{
    return(
        <div className="not-found-background">
            <div className="not-found-page">
                <h1>404 Not Found</h1>
                <p>The requested page does not exist.</p>
                <Link to="/" className="back-button">Back to Homepage</Link>
            </div>
        </div>
    )
}

export default NotFoundPage;
