import '../../App.css'
import './Button2.css'
import { Link } from 'react-scroll'

const Button2 = (props) => {
    return(
        <div className="button2">
            <Link to="popular" spy={true} smooth={true} offset={-50} duration={250}>
                <button className='button-more'>{props.button}</button>
            </Link>
        </div>
    )
}

export default Button2