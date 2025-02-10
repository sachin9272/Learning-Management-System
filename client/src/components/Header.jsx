import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dark mode by adding/removing the 'dark' class on the <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md">
        {/* Left Section: Logo, Hamburger and Desktop Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 bg-gray-200 dark:bg-gray-700 rounded focus:outline-none"
          >
            {/* Hamburger icon: three lines */}
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-300 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-300 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-300"></span>
          </button>
          <h1 className="text-xl font-bold text-blue-600">LMS</h1>
          {/* Desktop Navigation Links with extra left margin */}
          <nav className="hidden lg:flex gap-4 ml-8">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full w-1/3">
          <span className="text-gray-500 dark:text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search courses..."
            className="ml-2 bg-transparent focus:outline-none w-full text-gray-700 dark:text-gray-200"
          />
        </div>

        {/* Icons & Profile */}
        <div className="flex items-center gap-4 relative">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none">
            🔔
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none"
            >
              👤
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:text-white dark:bg-gray-800 shadow-md rounded-md py-2 z-10">
                <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </button>
                <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </button>
                <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white dark:bg-gray-900 dark:text-white shadow-md">
          <ul className="flex flex-col">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
