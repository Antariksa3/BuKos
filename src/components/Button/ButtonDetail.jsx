import '../../App.css'
import './ButtonDetail.css'

const ButtonDetail = (props) => {
    return(
        <div className="buttonDetail">
            <button className='button-detail'>{props.button}</button>
        </div>
    )
}

export default ButtonDetail