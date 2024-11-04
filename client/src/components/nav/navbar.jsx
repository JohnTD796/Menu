import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import '../../index.css';

export default function Navbar() {
  const [currentPage, setPage] = useState('/')
  const navigate = useNavigate();
  const isLoggedIn = !!Auth.getToken();

  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setPage(savedPage)
    }
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
    localStorage.setItem('currentPage', page);
  };

  return (
    <nav className="navbar bg-darkGrey p-4 flex justify-between items-center">
      <div className="title-container text-white">
        <Link
          id='home'
          className={` text-2xl font-bold ${currentPage === '/'}`
          }
          to='/'
          onClick={() => handlePageChange('/')}
        >
          Johns Food Truck
        </Link>
        {/* <button>
          <h2 className="text-2xl font-bold">Johns Food Truck</h2>
        </button> */}
      </div>

      <div className="navbarLinks-container">
        <div className="flex items-center space-x-4">
          <ul className="navbar-links flex space-x-4">
            <li>
              <Link
                id='home'
                className={`block px-4 py-2 ${currentPage === '/'
                  ? 'font-bold text-xl text-white bg-onyx rounded'
                  : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`
                }
                to='/'
                onClick={() => handlePageChange('/')}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                id='about'
                className={`block px-4 py-2 ${currentPage === '/about'
                  ? 'font-bold text-xl text-white bg-onyx rounded'
                  : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`
                }
                to='/about'
                onClick={() => handlePageChange('/about')}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                id='menu'
                className={`block px-4 py-2 ${currentPage === '/menu'
                  ? 'font-bold text-xl text-white bg-onyx rounded'
                  : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`
                }
                to='/menu'
                onClick={() => handlePageChange('/menu')}
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                id='profile'
                className={`block px-4 py-2 ${currentPage === '/profile'
                  ? 'font-bold text-xl text-white bg-onyx rounded'
                  : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`
                }
                to='/profile'
                onClick={() => handlePageChange('/profile')}
              >
                My Orders
              </Link>
            </li>
          </ul>

          <div className='ml-auto flex space-x-4'>
            {!isLoggedIn ? (
              <>
                <Link
                  id='login'
                  className={`block px-4 py-2 ${currentPage === '/login'
                    ? 'font-bold text-xl text-white bg-onyx rounded'
                    : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`
                  }
                  to='/login'
                  onClick={() => handlePageChange('/login')}
                >
                  Login
                </Link>

                <Link
                  id='signUp'
                  className={`block px-4 py-2 ${currentPage === '/signUp'
                    ? 'font-bold text-xl text-white bg-onyx rounded'
                    : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`
                  }
                  to='/signUp'
                  onClick={() => handlePageChange('/signUp')}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className={`block px-4 py-2 ${currentPage === '/signUp'
                  ? 'font-bold text-xl text-white bg-onyx rounded'
                  : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`
                }>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}