import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const BodySection = () => {
  const images = [
    "https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?t=st=1733110149~exp=1733113749~hmac=aeaa6d63893f320e661ea525f3281b98b88d1c34aea31cdaf965988694376d95&w=900",
    "https://img.freepik.com/premium-photo/photo-is-must-everyday-work-ai-generated-best-wonderful-photo_865967-966118.jpg?w=996",
    "https://img.freepik.com/free-photo/eggs-oranges-breakfast_23-2147667235.jpg?t=st=1733109993~exp=1733113593~hmac=418a06c9bab359fd2809f9445efd4821b334aafc0f52c8b4cdb8c0f3ffc9548a&w=900",
    "https://img.freepik.com/premium-photo/fresh-healthy-raw-vegetables_159938-1571.jpg?w=900",
    "https://img.freepik.com/free-photo/raw-lamb-chops-with-spices-herbs-close-up-wooden-background_1417-152.jpg?t=st=1733110495~exp=1733114095~hmac=68a88de89202ca4a5c37e9a2ffc22ad6935539b2e73878107cc6b21fe408c28e&w=900",
    "https://img.freepik.com/free-photo/different-dried-fruits_144627-16145.jpg?t=st=1733110069~exp=1733113669~hmac=569fb38961f4e89bf306a443b754edb56ba9484ca8c6b6fe12887427c0962349&w=1380",
    "https://img.freepik.com/premium-photo/high-angle-view-fish-served-plate_1048944-15516361.jpg?w=900"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Continuous scrolling with react-spring
  const scrollSpring = useSpring({
    transform: `translateX(-${currentIndex * 100}%)`,
    reset: true, 
    reverse: currentIndex % 2 === 0, // Reverse direction when index changes
    config: { tension: 250, friction: 60 },
    onRest: () => {
      // Move to the next image when the scroll animation finishes
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    },
  });

  // Interval for continuous scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <section className="bg-green-100 text-gray-800">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Fuel Your Body with <span className="text-green-500">Healthy Protein Foods</span>!
          </h1>
          <p className="text-lg md:text-xl">
            Discover a variety of fresh vegetables, fruits, eggs, chicken, mutton, fish, and more—all packed with the nutrients your body needs.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg font-bold transition duration-300">
              Shop Now
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-green-700 py-3 px-6 rounded-full text-lg font-bold transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Continuous Scrollable Image Container */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative flex justify-center items-center overflow-hidden">
          {/* Image Carousel (Continuous scrolling) */}
          <div className="w-[100vw] h-[300px] md:h-[400px] overflow-hidden rounded-lg relative">
            <animated.div
              className="flex transition-transform duration-500"
              style={scrollSpring}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <img
                    src={image}
                    alt="Protein Foods"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodySection;
