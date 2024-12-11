import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Logo and Social Media */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-green-700">Protein Food</h1>
          <button className="mt-4 px-4 py-2 border border-green-700 text-green-700 font-semibold rounded hover:bg-green-700 hover:text-white">
            News letters
          </button>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-green-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-700">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-700">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-700 mb-2">Healthy Living</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Healthy Recipes</li>
              <li>Meal Plans</li>
              <li>Healthy Eating</li>
              <li>Healthy Cooking</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-700 mb-2">Special Diets</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Healthy Lifestyle</li>
              <li>Special Diets</li>
              <li>Diabetes</li>
              <li>News</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-700 mb-2">Company</h3>
            <ul className="space-y-1 text-gray-600">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
