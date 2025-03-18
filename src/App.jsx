import { Link, NavLink, Outlet } from "react-router-dom";

export default function App() {

    return (
        <div className="full-page">

            <div className="menu">

                <Link className="logo" to={'/'}>
                    <img src="./assets/logo.svg" alt="" />
                </Link>

                <div className="links">

                    <NavLink to={'/'}>
                        <img src="./assets/icon-nav-home.svg" alt="" />
                    </NavLink>

                    <NavLink to={'/movies'}>
                        <img src="./assets/icon-nav-movies.svg" alt="" />
                    </NavLink>

                    <NavLink to={'/tv-series'}>
                        <img src="./assets/icon-nav-tv-series.svg" alt="" />
                    </NavLink>

                    <NavLink to={'/bookmarks'}>
                        <img src="./assets/icon-nav-bookmark.svg" alt="" />
                    </NavLink>

                </div>

                <Link className="me">
                    <img src="./assets/image-avatar.png" alt="" />
                </Link>

            </div>

            <div className="container">

                <Outlet />

            </div>

        </div>
    )
}