import '../../App.css'
import './TextField.css'

const TextField = (props) => {
return (
        <form action="" className='text-field'>
            <label className='text-field-label' htmlFor={props.htmlFor}>{props.label}</label><br />
            <input 
                className='text-field-input'
                type={props.type} 
                name={props.name} 
                id={props.inputId} 
                placeholder={props.placeholder}
                onChange={props.onChange}
                required
                autoComplete='off'
            />
        </form>
    )
}

export default TextField