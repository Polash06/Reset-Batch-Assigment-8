import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const Links = <div className="">
    <NavLink
     className={({ isActive}) => isActive ? 

      'text-red-700 font-bold underline text-lg mx-3': 'font-bold text-lg mx-3'} to='/'>Home</NavLink>

    <NavLink 
    className={({ isActive}) => isActive ? 
     'text-red-700 font-bold underline text-lg mx-3': 'font-bold text-lg mx-3'} to='/Listed'>Listed Books</NavLink>

    <NavLink 
    className={({ isActive}) => isActive ?  
    'text-red-700 font-bold underline text-lg mx-3': 'font-bold text-lg mx-3'} to='/Read'>Pages to Read</NavLink>
    </div>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              
             {Links}

            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            

          {Links}

          </ul>
        </div>
        <div className="navbar-end gap-1">
          <button className="btn btn-success">Sign In</button>
        <button className="btn btn-warning">Sing Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
