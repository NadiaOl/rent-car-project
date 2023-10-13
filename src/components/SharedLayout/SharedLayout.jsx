import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './SharedLayout.module.css';

export const SharedLayout = () => {

  return (
    <div className={css.container}>
        <nav className={css.navSection}>
          <NavLink className={css.navLink} to="/">Home</NavLink>
          <NavLink className={css.navLink}  to="/catalog">Catalog</NavLink>
          <NavLink className={css.navLink}  to="/favorites">Favorites</NavLink>
        </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
