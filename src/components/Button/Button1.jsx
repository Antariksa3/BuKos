import '../../App.css'
import './Button1.css'

const Button1 = (props) => {
    return(
        <div className="button1">
            <button className='button-input'>{props.button}</button>
        </div>
    )
}

export default Button1