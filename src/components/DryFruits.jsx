import React from "react";

const DryFruits = () => {
  const dryFruitsItems = [
    {
      name: "Almonds",
      info: "Almonds are packed with protein, healthy fats, and vitamin E. They're great for heart health and brain function.",
      image: "https://img.freepik.com/free-photo/almonds-close_1203-905.jpg?t=st=1733456579~exp=1733460179~hmac=6f34fd0a57eb18ad91837463c8b202da05b1b2494f94e3a3b64674ed7330f330&w=900", // Replace with actual almonds image URL
    },
    {
      name: "Cashews",
      info: "Cashews are rich in magnesium, copper, and healthy fats. They help with muscle and nerve function.",
      image: "https://img.freepik.com/free-photo/fried-cashew_1368-5461.jpg?t=st=1733456619~exp=1733460219~hmac=471f3adcbaef86de53acbf230fe2993f48642aca18f02adef4b97367dd47fcfd&w=740", // Replace with actual cashews image URL
    },
    {
      name: "Walnuts",
      info: "Walnuts are a great source of omega-3 fatty acids, supporting heart health and reducing inflammation.",
      image: "https://img.freepik.com/free-photo/top-view-walnuts-surface_176474-749.jpg?t=st=1733456661~exp=1733460261~hmac=c282b8786a206b35a12bdb18dd0ac29be7538358ea4b0f34d2245821a40855ab&w=900", // Replace with actual walnuts image URL
    },
    {
      name: "Pistachios",
      info: "Pistachios are rich in antioxidants and fiber. They support digestive health and are good for weight management.",
      image: "https://img.freepik.com/free-photo/pistachio-nuts-pink-bowl-blue-wooden-table-background_158538-26208.jpg?t=st=1733456691~exp=1733460291~hmac=45c412a2a60ba4c2e69dbd60097c7d4afe2d3a4b0c29e82c6a1dbe805a2e1ac3&w=900", // Replace with actual pistachios image URL
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Dry Fruits
      </h1>

      {/* Horizontal Scroll Container for Mobile */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {dryFruitsItems.map((item, index) => (
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
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2">{item.info}</p>
            </div>

            {/* Hover Animation Overlay */}
            <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DryFruits;
