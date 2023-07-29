import { useRef } from 'react';
import './FilterSearch.css'
import { FaSearch, FaTimes } from 'react-icons/fa'

const FilterSearch = (props) => {
    const inputRef = useRef(null);

    const handleClearInput = () => {
        inputRef.current.value = '';
        props.onChange({ target: { value: '' } });
        if (props.onClearInput) {
            props.onClearInput();
        }
    };

    return (
        <div className="search-filter">
            <div className="filter-search-wrapper filter-input-container">
                <FaSearch id='search-icon' />
                <input
                    ref={inputRef}
                    className='filter-input'
                    value={props.value}
                    placeholder='Cari kos di sekitarmu...'
                    onChange={props.onChange}
                />
                {inputRef.current && inputRef.current.value && (
                    <FaTimes className="clear-input-icon" onClick={handleClearInput} />
                )}
            </div>
        </div>
    )
}

export default FilterSearch