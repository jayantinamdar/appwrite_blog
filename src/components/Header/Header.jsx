import React from 'react'
import {Container, Logo, LogoutBtn} from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()

  const navItems = [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]

  return (
     <header className='py-3 shadow bg-gray-500'> 
        <Container>
            <nav className='flex items-center'>
                <div className='mr-4'>
                  <Link to={'/'}>
                    <Logo width='70px' />
                  </Link>
                </div>
                <ul className='flex ml-auto'>

                  {
                    navItems.map((item) => 
                      item.active ? (
                        <li key={item.name}>
                          <button onClick={() => navigate(item.slug)}
                            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
                        </li>
                      ) : null
                    )
                  }

                  {
                    authStatus && (
                      <li>
                        <div className='flex justify-center items-center gap-2 mr-5'>
                           <LogoutBtn />
                           <h1 className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{userData && userData.name}</h1>
                        </div>
                      </li>
                    )
                  }
                  
                </ul>
            </nav>
        </Container>
     </header>
  )
}

export default Header
