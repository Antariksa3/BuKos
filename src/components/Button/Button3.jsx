import '../../App.css'
import './Button3.css'
import { useNavigate, Link } from 'react-router-dom'


const Button3 = (props) => {
    const navigate = useNavigate()

    return(
        <div className="button3">
            <Link to='/listkos'>
                <button className='button-show' >{props.button}</button>
            </Link>
        </div>
    )
}

export default Button3