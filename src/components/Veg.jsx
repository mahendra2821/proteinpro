import React from "react";

const Veg = () => {
  const vegItems = [
    {
      name: "Paneer",
      info: "Paneer is a rich source of protein and calcium. It helps in building strong bones and muscles.",
      image: "https://img.freepik.com/premium-photo/bowl-food-with-rice-tofu-tofu_1207919-47509.jpg?w=900", // Replace with actual paneer image URL
    },
    {
      name: "Lentils",
      info: "Lentils are packed with plant-based protein and fiber, aiding digestion and maintaining energy.",
      image: "https://img.freepik.com/free-photo/high-angle-spices-tomatoes_23-2148262183.jpg?t=st=1733454603~exp=1733458203~hmac=17421660a99645ff6653543ca1a87877ad02b5b54429da313f8c04b158b64635&w=900", // Replace with actual lentils image URL
    },
    {
      name: "Carrorts",
      info: "Carrots provide about 0.9 grams of protein per 100-gram serving. Protein in carrots plays a minor role compared to other nutrients like fiber, vitamins A, K, and C, and antioxidants. .",
      image: "https://img.freepik.com/free-photo/stack-carrots-bowl-marble_114579-65075.jpg?t=st=1733454961~exp=1733458561~hmac=709f652cd04af788bb9024a29a161cbc3800b29aa7fc695f2bae9fe151b790fb&w=900", // Replace with actual tofu image URL
    },
    {
      name: "Spinach",
      info: "Spinach is high in iron and antioxidants, essential for healthy blood cells and immune function.",
      image: "https://img.freepik.com/premium-photo/spinach-white-close-up_183352-1473.jpg?w=826", // Replace with actual spinach image URL
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Vegetarian Protein Items
      </h1>

      {/* Horizontal Scroll Container for Mobile */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {vegItems.map((item, index) => (
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
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2">{item.info}</p>
            </div>

            {/* Hover Animation Overlay */}
            <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veg;
