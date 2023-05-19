import '../../App.css'
import './Button4.css'

const Button4 = (props) => {
    return(
        <div className="button4">
            <button className='button-detail'>{props.button}</button>
        </div>
    )
}

export default Button4