import { Link, NavLink } from "react-router-dom";

import classes from "./MainNavBar.module.css";

function MainNavBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>No Waste</div>
      <div className={classes.menu__bar__bottom}>
        <Link to='/' className={classes.menu__bar__bottom__icons}>
          <i className='bi bi-house'></i>
          <span className={classes.menu__bar__bottom__text}>Home</span>
        </Link>
        <NavLink to='/archvie' className={classes.menu__bar__bottom__icons}>
          <i className='bi bi-archive'></i>
        </NavLink>
        <Link to='/' className={classes.menu__bar__btn__wrapper}>
          <div className={classes.menu__bar__btn}>
            <div className={classes.line__1}></div>
            <div className={classes.line__2}></div>
            <div className={classes.line__3}></div>
          </div>
        </Link>
        <Link to='/recipe' className={classes.menu__bar__bottom__icons}>
          <i className='bi bi-receipt'></i>
          <span className={classes.menu__bar__bottom__text}>Recipes</span>
        </Link>
        <Link to='/user' className={classes.menu__bar__bottom__icons}>
          <i className='bi bi-person'></i>
          <span className={classes.menu__bar__bottom__text}>User</span>
        </Link>
      </div>
    </header>
  );
}

export default MainNavBar;
