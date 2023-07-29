import '../../App.css'
import './ButtonDetail.css'
import { Link as RouterLink } from 'react-router-dom'

const ButtonDetail = (props) => {
    return (
        <RouterLink to='/detail'>
            <div className="buttonDetail">
                <button className='button-detail'>{props.button}</button>
            </div>
        </RouterLink>
    )
}

export default ButtonDetail