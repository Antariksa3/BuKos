import '../../App.css'
import './ButtonSeeAll.css'
import { useNavigate, Link as RouterLink } from 'react-router-dom'



const ButtonSeeAll = (props) => {
    const navigate = useNavigate()

    return(
        <div className="buttonSeeAll">
            <RouterLink to='/listkos'>
                <button className='button-show' >{props.button}</button>
            </RouterLink>
        </div>
    )
}

export default ButtonSeeAll