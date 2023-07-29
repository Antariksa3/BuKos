import './ButtonSearch.css'

const ButtonSearch = (props) => {
    return (
        <div className="button-search">
            <button
                // className='button-filter'
                className={`button-filter ${props.disabled ? 'disabled' : ''}`}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.button}
            </button>
        </div>
    )
}

export default ButtonSearch