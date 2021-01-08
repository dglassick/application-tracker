import React from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AddIcon from '@material-ui/icons/Add';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <a className='' href='/'>
          <AddToQueueIcon className='navbar__logoIcon' />
        </a>
      </div>
      <div className='navbar__title'>
        <h2>Application Tracker</h2>
      </div>
      <div className='navbar__nav'>
        <div className='navbar__newApplication'>
          <AddIcon className='navbar__newApplicationIcon' />
        </div>
        <div className='navbar__auth'>
          <span className='navbar__authLineOne'>Hello, Frank</span>
          <span className='navbar__authLineTwo'>Sign Out</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
