import React from 'react'
import classes from './Header.module.css'
import headerImage from '../../assests/meals.jpg'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Menu Cart</h1>
        <button>Cart</button>
      </header>

      <div className={classes['main-image']}>
        <img src={headerImage} alt="HeaderImage" />
      </div>
    </>
  )
}

export default Header