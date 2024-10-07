import React from 'react';
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='logo.png' alt='moviedux'/>
            <h2 className='app-subtitle'>It's popcorn time, find your next movie here.</h2>
        </div>
    );
}