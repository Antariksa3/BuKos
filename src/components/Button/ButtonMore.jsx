import '../../App.css'
import './ButtonMore.css'
import { Link as ScrollLink } from 'react-scroll'


const ButtonMore = (props) => {
    return(
        <div className="buttonMore">
            <ScrollLink to="popular" spy={true} smooth={true} offset={-50} duration={250}>
                <button className='button-more'>{props.button}</button>
            </ScrollLink>
        </div>
    )
}

export default ButtonMore