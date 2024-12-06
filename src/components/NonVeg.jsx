import React from "react";

const NonVeg = () => {
  const proteinItems = [
    {
      name: "Chicken",
      info: "Chicken is rich in lean protein, aiding muscle growth and repair. It supports a healthy weight and provides essential vitamins.",
      image: "https://img.freepik.com/premium-photo/whole-roasted-chicken-with-lemon-vegetbles-cutting-board-wooden-rustic-background_425936-1186.jpg?w=900", // Replace with actual chicken image URL
    },
    {
      name: "Egg",
      info: "Eggs are packed with protein and nutrients. They help with muscle recovery and are a great source of energy.",
      image: "https://img.freepik.com/premium-photo/delicious-fried-egg-sandwich-black-rustic-wooden-background_41220-292.jpg?w=900", // Replace with actual egg image URL
    },
    {
      name: "Mutton",
      info: "Mutton is high in iron and protein, supporting energy production and healthy blood cells.",
      image: "https://img.freepik.com/premium-photo/raw-mutton-meat-diced-goulash-stew-with-bone-rustic-plate-dark_89816-22226.jpg?w=900", // Replace with actual mutton image URL
    },
    {
      name: "Fish",
      info: "Fish is rich in omega-3 fatty acids, essential for heart health, brain function, and reducing inflammation.",
      image: "https://img.freepik.com/premium-photo/raw-porgy-white-dish-wood_95419-4237.jpg?w=900", // Replace with actual fish image URL
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Non-Veg Protein Items
      </h1>

      {/* Horizontal Scroll Container for Mobile */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {proteinItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:min-w-full md:w-auto relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Description Section */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2">{item.info}</p>
            </div>

            {/* Hover Animation Overlay */}
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonVeg;
