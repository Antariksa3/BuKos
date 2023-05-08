import './BenefitCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BenefitCard = (props) => {
    return (
        <div className='benefit-card'>
            <FontAwesomeIcon icon={props.icon} className='icon' />
            <h4>{props.benefitText}</h4>
        </div>
    )
}

export default BenefitCard