import './ReviewCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import reviewUser from '../../assets/images/reviewUser1.svg'

const ReviewCard = (props) => {
    return (
        <div className="review-card">
            <FontAwesomeIcon icon={faQuoteLeft} className='review-quote' />
            <h4 className='review-desc'>{props.review}</h4>
            <span></span>
            <div className="review-user">
                <div className="review-user-profile">
                    <img src={reviewUser} className='review-user-profile-pict' />
                    <h4>{props.user}</h4>
                </div>
                {/* <FontAwesomeIcon icon={props.icon} className='review-like' /> */}
            </div>
        </div>
    )
}

export default ReviewCard