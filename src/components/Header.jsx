
import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(isDropdownOpen === menu ? '' : menu);
  };

  return (
    <header className="bg-green-500 text-white px-4 py-3 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo/Name */}
        <div className="text-[25px] font-bold">Protein Food</div>

        {/* Middle: Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {/* Healthy Recipes */}
            <div className="relative" onClick={() => toggleDropdown('healthyRecipes')}>
              <button className="flex items-center space-x-2 font-bold text-[18px] hover:text-blue-300 transition duration-200">
                <span>Healthy Recipes</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen === 'healthyRecipes' && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
                  <a
                    href="/dinner"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Dinner
                  </a>
                  <a
                    href="/breakfast"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Breakfast & Brunch
                  </a>
                  <a
                    href="/lunch"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Lunch
                  </a>
                  <a
                    href="/side-dishes"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Side Dishes
                  </a>
                  <a
                    href="/salads"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Salads
                  </a>
                  <a
                    href="/soup"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Soups
                  </a>
                  <a
                    href="/desserts"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Desserts
                  </a>
                  <a
                    href="/snacks"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Snacks
                  </a>
                </div>
              )}
            </div>

            {/* Daibeties */}

            <div className="relative" onClick={() => toggleDropdown('diabetes')}>
               <button className="flex items-center space-x-2 font-bold text-[18px] hover:text-blue-300 transition duration-200">
                 <span>Diabetes</span>
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
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen === 'diabetes' && (
                <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
                  <a
                    href="/diabetes-meal-plans"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Meal Plans for Diabetes
                  </a>
                  <a
                    href="/diabetes-recipes"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Diabetes-Friendly Recipes
                  </a>
                </div>
              )}
            </div>

            {/* Speacial diets */}


            <div
              className="relative"
              onClick={() => toggleDropdown('specialDiets')}
            >
              <button className="flex items-center space-x-2 font-bold text-[18px] hover:text-blue-300 transition duration-200">
                <span>Special Diets</span>
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
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen === 'specialDiets' && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
                  <a
                    href="/weight-loss"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Heart Health
                  </a>
                  <a
                    href="/weight-loss"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Vegeterian
                  </a>
                  <a
                    href="/weight-loss"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Mediterranean Diet
                  </a>
                  <a
                    href="/weight-loss"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Low cholesterol
                  </a>
                  <a
                    href="/weight-loss"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Dinner Plans
                  </a>
                </div>
              )}
            </div>

             {/* About Us */}
             <div className="relative" onClick={() => toggleDropdown('about')}>
               <button className="flex items-center space-x-2 font-bold text-[18px] hover:text-blue-300 transition duration-200">
                 <span>About Us</span>
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
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen === 'about' && (
                <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
                  <a
                    href="/philosophy"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition duration-200"
                  >
                    Our Food & Nutrients Philosophy
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>

            

            {/* Add other dropdown menus similarly */}
       

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-full bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17l-5-5m0 0l-5-5m10 0a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Login Button */}
        <button
  type="button"
  className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-[18px] py-2 px-4 rounded-full w-[7vw] transition duration-300 hidden md:block"
>
  Login
</button>


        {/* Hamburger Icon for Mobile Menu */}
        <button
          className="block md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
  className={`fixed top-0 right-0 h-full w-3/4 bg-green-700 text-white transform transition-transform duration-300 z-50 ${
    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {/* Close Button */}
  <button className="mt-4 ml-4" onClick={() => setIsMobileMenuOpen(false)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  {/* Sidebar Navigation */}
  <nav className="flex flex-col mt-8 space-y-4 px-4 text-lg font-bold">
    {/* Healthy Recipes Dropdown */}
    <div className="group relative">
      <button className="flex justify-between w-full hover:text-gray-200">
        Healthy Recipes
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
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="hidden group-hover:block mt-2 space-y-2 text-sm  ml-5">
        <a
          href="/dinner"
          className="block hover:text-gray-200 hover:underline"
        >
          Dinner
        </a>
        <a
          href="/breakfast"
          className="block hover:text-gray-200 hover:underline"
        >
          Breakfast & Brunch
        </a>
        <a
          href="/lunch"
          className="block hover:text-gray-200 hover:underline"
        >
          Lunch
        </a>
        <a
          href="/side-dishes"
          className="block hover:text-gray-200 hover:underline"
        >
          Side Dishes
        </a>
        <a
          href="/salads"
          className="block hover:text-gray-200 hover:underline"
        >
          Salads
        </a>
        <a
          href="/soup"
          className="block hover:text-gray-200 hover:underline"
        >
          Soup
        </a>
        <a
          href="/desserts"
          className="block hover:text-gray-200 hover:underline"
        >
          Desserts
        </a>
        <a
          href="/snacks"
          className="block hover:text-gray-200 hover:underline"
        >
          Snacks
        </a>
      </div>
    </div>

    {/* Diabetes Dropdown */}
    <div className="group relative">
      <button className="flex justify-between w-full hover:text-gray-200">
        Diabetes
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
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="hidden group-hover:block mt-2 space-y-2 text-sm  ml-5">
        <a
          href="/diabetes-meal-plans"
          className="block hover:text-gray-200 hover:underline"
        >
          Meal Plans for Diabetes
        </a>
        <a
          href="/diabetes-friendly-recipes"
          className="block hover:text-gray-200 hover:underline"
        >
          Diabetes-Friendly Recipes
        </a>
      </div>
    </div>

    {/* Special Diets Dropdown */}
    <div className="group relative">
      <button className="flex justify-between w-full hover:text-gray-200 ">
        Special Diets
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
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="hidden group-hover:block mt-2 space-y-2 text-sm ml-5">
        <a
          href="/weight-loss"
          className="block hover:text-gray-200 hover:underline"
        >
          Weight Loss
        </a>
        <a
          href="/heart-health"
          className="block hover:text-gray-200 hover:underline"
        >
          Heart Health
        </a>
        <a
          href="/vegetarian"
          className="block hover:text-gray-200 hover:underline"
        >
          Vegetarian
        </a>
        <a
          href="/mediterranean"
          className="block hover:text-gray-200 hover:underline"
        >
          Mediterranean Diet
        </a>
      </div>
    </div>

    {/* About Us Dropdown */}
    <div className="group relative">
      <button className="flex justify-between w-full hover:text-gray-200">
        About Us
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
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="hidden group-hover:block mt-2 space-y-2 text-sm  ml-5">
        <a
          href="/our-philosophy"
          className="block hover:text-gray-200 hover:underline"
        >
          Our Food & Nutrients Philosophy
        </a>
      </div>
      <button className='mt-[5vh] w-[6vw]'>
        <a href="/login" className="bg-blue-500 hover:bg-blue-600  text-white font-bold text-[18px]  py-2 px-4 rounded-xl w-[25vw] transition duration-300">             Login
      </a></button>
    </div>
  </nav>
</div>


    </header>
  );
};

export default Header;



