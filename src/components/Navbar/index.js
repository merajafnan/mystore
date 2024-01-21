'use client';
import React from 'react'

const isAuthUser = true;
const user = {
  role: 'admin'
}

const Navbar = () => {
  return (
    <>
      {
        isAuthUser ?
          // Logged in User  
          <div className="navbar bg-base-100 shadow-2xl">
            <div className="navbar-start">

              {/* Small Screen */}
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 shadow-md">
                  <li><a>Home</a></li>

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

                  <li>
                    <details>
                      <summary>My Purchase</summary>
                      <ul className="p-2">
                        <li><a>Learnings</a></li>
                        <li><a>Services</a></li>
                      </ul>
                    </details>
                  </li>

                </ul>
              </div>
              <a className="btn btn-ghost text-xl">Engineers Arena</a>
            </div>

            {/* Big Screen */}
            <div className="navbar-center hidden lg:flex shadow-lg">
              <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
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
                    <summary>Learning Modules</summary>
                    <ul className="p-2">
                      <li><a>Website Development</a></li>
                      <li><a>IOS App Developmet</a></li>
                      <li><a>Andriod App Development</a></li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>My Purchase</summary>
                    <ul className="p-2">
                      <li><a>Learnings</a></li>
                      <li><a>Services</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>

          :
          // Guest User
          <div className="navbar bg-base-100 shadow-2xl">
            <div className="navbar-start">
              {/* Small Screen */}
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 shadow-md">
                  <li><a>Home</a></li>

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

                </ul>
              </div>
              <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            {/* Big Screen */}
            <div className="navbar-center hidden lg:flex shadow-lg">
              <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
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
                    <summary>Learning Modules</summary>
                    <ul className="p-2">
                      <li><a>Website Development</a></li>
                      <li><a>IOS App Developmet</a></li>
                      <li><a>Andriod App Development</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>
      }
    </>
  )
}

export default Navbar