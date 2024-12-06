import React from 'react';

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* Desktop and Laptop View (Grid Layout) */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-4">"This is the best product I have ever used! Highly recommend it to everyone."</p>
          <h3 className="font-semibold text-blue-700">John Doe</h3>
          <p className="text-sm text-gray-500">Software Developer</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-4">"Amazing quality and great customer service. Will definitely buy again!"</p>
          <h3 className="font-semibold text-blue-700">Jane Smith</h3>
          <p className="text-sm text-gray-500">Graphic Designer</p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-4">"I love how easy it is to use. It has really made my life easier."</p>
          <h3 className="font-semibold text-blue-700">Sam Wilson</h3>
          <p className="text-sm text-gray-500">Entrepreneur</p>
        </div>
      </div>

      {/* Mobile View (Scroll Layout) */}
      <div className="sm:hidden flex overflow-x-scroll mt-8 space-x-8">
        
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
          <p className="text-lg text-gray-700 mb-4">"This is the best product I have ever used! Highly recommend it to everyone."</p>
          <h3 className="font-semibold text-blue-700">John Doe</h3>
          <p className="text-sm text-gray-500">Software Developer</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
          <p className="text-lg text-gray-700 mb-4">"Amazing quality and great customer service. Will definitely buy again!"</p>
          <h3 className="font-semibold text-blue-700">Jane Smith</h3>
          <p className="text-sm text-gray-500">Graphic Designer</p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
          <p className="text-lg text-gray-700 mb-4">"I love how easy it is to use. It has really made my life easier."</p>
          <h3 className="font-semibold text-blue-700">Sam Wilson</h3>
          <p className="text-sm text-gray-500">Entrepreneur</p>
        </div>
      </div>

    </div>
  );
};

export default Testimonials;
