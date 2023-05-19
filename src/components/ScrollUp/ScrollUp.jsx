import './ScrollUp.css'
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'

const ScrollUp = () => {
    const [scroll, setScroll] = useState(false)
    const changeScroll = () =>{
        if (window.scrollY >= 50){
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', changeScroll)

    return(
        <>
            <a href="#" className={scroll ? 'scrollup show-scroll' : 'scrollup'}>
                <FontAwesomeIcon icon={faAngleUp} />
            </a>
        </>
    )
}

export default ScrollUp