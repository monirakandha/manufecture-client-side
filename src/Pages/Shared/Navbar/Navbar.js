import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
import { signOut } from "firebase/auth";
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
    return (
        <div className="navbar bg-base-100 p-5">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">Manufacturer</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
            <li><Link to="/">Home</Link></li>
                {user && (
                <li>
                <Link to="/purchase" activeClassName="selected">
                  Purchase
                </Link>
                </li>
              )}
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/myportfolio">My Portfolio</Link></li>
            {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
            </ul>
        </div>
        </div>
    );
};

export default Navbar;