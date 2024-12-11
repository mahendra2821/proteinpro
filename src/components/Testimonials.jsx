import React, { useState } from "react";

const testimonials = [
  {
    name: "John Smith",
    location: "New York, NY",
    image: "https://img.freepik.com/premium-photo/portrait-pretty-young-woman-smiling-closeup_218872-544.jpg?w=200", // Replace with actual image URL
    quote:
      "Proteins are the building blocks of life. Incorporating them into my diet has improved my health and energy levels significantly!",
  },
  {
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    image: "https://img.freepik.com/free-photo/young-indian-man-dressed-trendy-outfit-monitoring-information-from-social-networks_231208-2766.jpg?t=st=1733920437~exp=1733924037~hmac=1c5d2b5a678e6bc13d52ef6ce400058db308b29936ad44c258d7687b6a0823ab&w=200", // Replace with actual image URL
    quote:
      "Ever since I started focusing on protein intake, I've noticed better muscle recovery and overall fitness progress!",
  },
  {
    name: "Emily Brown",
    location: "Chicago, IL",
    image: "https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18659.jpg?t=st=1733920462~exp=1733924062~hmac=22dd1a11d0fd96c7df7c730d1486e64de1653cd92389c19cccb281e0787c5ec2&w=200", // Replace with actual image URL
    quote:
      "High-protein diets have been a game changer for me. I feel fuller and more satisfied throughout the day!",
  },
];

const Testimonials= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center bg-blue-50 p-6 md:p-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Testimonials</h2>
      <p className="text-center text-gray-600 mb-10">See what people are saying about proteins.</p>

      <div className="relative w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer" onClick={prevSlide}>
          <button className="text-gray-600 hover:text-blue-600">&#8592;</button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={nextSlide}>
          <button className="text-gray-600 hover:text-blue-600">&#8594;</button>
        </div>

        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <p className="italic text-gray-700 mb-4">"{testimonials[currentIndex].quote}"</p>
        <h3 className="text-lg font-bold text-blue-600">
          {testimonials[currentIndex].name}
        </h3>
        <p className="text-gray-500">{testimonials[currentIndex].location}</p>
      </div>

      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
