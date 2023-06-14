import React from 'react'

import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="background-glass">
            <div className="input-wrapper">
                <FaSearch id='search-icon'/>
                <input className='search-input' placeholder='Cari kos di sekitarmu...' />
            </div>
                <button type="submit" className='search-button'>Cari</button>
        </div>
    )
}

export default SearchBar