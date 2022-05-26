import React from 'react'
import './Taskbar.css';

const Taskbar = () => {
  return (
    <div className='Taskbar-color-bkgd'>
        <div className='Taskbar-ul-parent'>
            
            <ul className='Taskbar-ul'>
                <li><a  href="https://google.com"><b>ProjectWager</b></a></li>
                <li><a href="https://google.com">Home</a></li>
                <li><a href="https://google.com">Tournaments</a></li>
                <li><a href="https://google.com">Stats</a></li>
                <li><a href="https://google.com">About</a></li>
                <li><a href="https://google.com">Devs</a></li>
                <div className='Taskbar-ul-right'>
                    <li>Logged in</li>
                    <li><a  href="https://google.com"><b>asadhneni</b></a></li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Taskbar