import '../../App.css'
import './ButtonRegister.css'

const ButtonRegister = (props) => {
    return(
        <div className="button1">
            <button className='button-input'>{props.button}</button>
        </div>
    )
}

export default ButtonRegister