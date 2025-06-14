import { useLocation } from 'react-router-dom';
import Logo from '/public/assets/logo.png';


const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isProjectsPage = location.pathname === '/projects';
  const isHomePage = location.pathname === '/';

  return (
    <nav className="top-1 w-full z-40 pt-2">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          <a href="/">
            <img className="h-8" src={Logo} alt="logo" />
          </a>
          <div className="items-center space-x-5 text-lg">
          <a
              href="/"
              className={`relative inline-block text-gray-300 transition-colors group ${
                isHomePage ? 'text-white' : 'hover:text-zinc-400'
              }`}
            >
              <span className="relative z-10">Home</span>
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 w-0 bg-gray-300 transition-all duration-300 transform -translate-x-1/2 ${
                  isHomePage ? 'w-full' : 'group-hover:w-full'
                }`}
              ></span>
            </a>
            <a
              href="/about"
              className={`relative inline-block text-gray-300 transition-colors group ${
                isAboutPage ? 'text-white' : 'hover:text-zinc-400'
              }`}
            >
              <span className="relative z-10">About</span>
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 w-0 bg-gray-300 transition-all duration-300 transform -translate-x-1/2 ${
                  isAboutPage ? 'w-full' : 'group-hover:w-full'
                }`}
              ></span>
            </a>
            <a
              href="/projects"
              className={`relative inline-block text-gray-300 transition-colors group ${
                isProjectsPage ? 'text-white' : 'hover:text-zinc-400'
              }`}
            >
              <span className="relative z-10">Projects</span>
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 w-0 bg-gray-300 transition-all duration-300 transform -translate-x-1/2 ${
                  isProjectsPage ? 'w-full' : 'group-hover:w-full'
                }`}
              ></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
