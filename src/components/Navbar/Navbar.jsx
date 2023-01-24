import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='header-wrapper'>
            <div className='logo-wrapper'>
                <div className='logo-container'>
                    <img src='/images/mt.svg' alt='logo'/>
                </div>
                <div className='title-wwrapper'>
                    <p>monkey see</p>
                    <h1>monkeytype</h1>
                </div>
            </div>

            <div className='icons-wrapper'>
                <div className='keyboard-wrapper'>
                    <img src='/images/keyboard.svg'/>
                    <img src='/images/crown.svg'/>
                    <img src='/images/settings.svg'/>
                </div>

                <div className='reg-wrapper'>
                    <img src='/images/bell.svg'/>
                    <img src='/images/user.svg' />
                </div>
            </div>
        
    </header>
  )
}

export default Navbar