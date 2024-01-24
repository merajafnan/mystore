
import { UserAuth } from '@/app/context/AuthContext';
import React, { useEffect, useState } from 'react';


const isAuthUser = false;
const user = {
  role: 'admin'
}

const Navbar = () => {

  const { user, googleSignIn, logout } = UserAuth();
  const [loading, setLoading] = useState(true)

  // console.log(user);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(user.photoURL);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);


  return (
    <>
      {/* Guest User */}
      <div className="navbar bg-base-100 shadow-2xl">
        <div className="navbar-start">
          {/* Small Screen */}
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 shadow-md">
              <li><a href='/'>Home</a></li>

              <li>
                <details>
                  <summary>Learning Modules</summary>
                  <ul className="p-2">
                    <li><a>Core Networking</a></li>
                    <li><a>Protocol Testing</a></li>
                    <li><a>DevOps</a></li>
                    <li><a>Full Stack Web Development</a></li>
                  </ul>
                </details>

              </li>

              <li>
                <details>
                  <summary>Our Services</summary>
                  <ul className="p-2">
                    <li><a>Website Development</a></li>
                    <li><a>IOS App Developmet</a></li>
                    <li><a>Andriod App Development</a></li>
                  </ul>
                </details>
              </li>

              {!user ? null : (
                <li>
                  <details>
                    <summary>My Purchase</summary>
                    <ul className="p-2">
                      <li><a href='/mypurchase'>Learnings</a></li>
                      <li><a>Services</a></li>
                    </ul>
                  </details>
                </li>)}


            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href='/'>nw2CD</a>
        </div>

        {/* Big Screen */}
        <div className="navbar-center hidden lg:flex shadow-lg">
          <ul className="menu menu-horizontal px-1">
            <li><a href='/'>Home</a></li>
            <li>
              <details>
                <summary>Learning Modules</summary>
                <ul className="p-2">
                  <li><a>Core Networking</a></li>
                  <li><a>Protocol Testing</a></li>
                  <li><a>DevOps</a></li>
                  <li><a>Full Stack Web Development</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Our Services</summary>
                <ul className="p-2">
                  <li><a>Website Development</a></li>
                  <li><a>IOS App Developmet</a></li>
                  <li><a>Andriod App Development</a></li>
                </ul>
              </details>
            </li>

            {!user ? null : (
                <li>
                  <details>
                    <summary>My Purchase </summary>
                    <ul className="p-2">
                      <li><a href='/mypurchase'>Learnings</a></li>
                      <li><a>Services</a></li>
                    </ul>
                  </details>
                </li>)}
          
          </ul>
        </div>

        {loading ? null : !user ? (
          <div className="navbar-end flex gap-2">
            <a className="btn bg-black text-white" href='/signin' >Sign up</a>
            <a className="btn" onClick={handleSignIn}>Log in</a>
          </div>
        ) : (
          <div className="navbar-end flex gap-2">
            <a >Welcome, {user.displayName}</a>
            <a className="btn" onClick={handleSignOut} href='/'>Logout</a>
          </div>
        )}

      </div>
    </>
  )
}

export default Navbar