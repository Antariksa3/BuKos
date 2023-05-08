import '../../App.css'
import './Button2.css'

const Button2 = (props) => {
    return(
        <div className="button2">
            <button className='button-more'>{props.button}</button>
        </div>
    )
}

export default Button2