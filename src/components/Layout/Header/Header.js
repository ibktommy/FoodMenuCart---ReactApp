import React from 'react'
import classes from './Header.module.css'
import headerImage from '../../../assests/meals.jpg'
import HeaderCartBtn from '../HeaderCartBtn/HeaderCartBtn'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Menu Cart</h1>
        <HeaderCartBtn openCart={props.openCart}/>
      </header>

      <div className={classes['main-image']}>
        <img src={headerImage} alt="HeaderImage" />
      </div>
    </>
  )
}

export default Header