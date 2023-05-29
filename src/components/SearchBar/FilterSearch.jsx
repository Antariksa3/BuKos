import './FilterSearch.css'
import { FaSearch } from 'react-icons/fa'


const FilterSearch = () =>{
    return(
        <div className="search-filter">
            <div className="filter-search-wrapper">
                <FaSearch id='search-icon'/>
                <input className='filter-input' placeholder='Cari kos di sekitarmu...' />
            </div>
        </div>
    )
}

export default FilterSearch