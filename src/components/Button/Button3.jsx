import '../../App.css'
import './Button3.css'
import { useNavigate } from 'react-router-dom'


const Button3 = (props) => {
    const navigate = useNavigate()

    return(
        <div className="button3">
            <button className='button-show' onClick={() => navigate('/listkos')}>{props.button}</button>
        </div>
    )
}

export default Button3