import React from 'react';

const Description = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Vegetables Category */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-xl font-bold text-green-700 mb-4">Vegetables</h2>
          <div className="text-sm text-gray-700">
            Vegetables are an essential part of a healthy diet, offering a wide array of vitamins, minerals, and fiber that support overall health. Rich in antioxidants, they help reduce inflammation and protect the body against oxidative stress. Many vegetables, such as leafy greens, are excellent sources of folate, which supports cell function and tissue growth. They are also a natural source of dietary fiber, which aids in digestion and helps regulate blood sugar levels. Vegetables like carrots and sweet potatoes are packed with beta-carotene, promoting healthy vision. Leafy greens like spinach and kale provide iron and calcium, supporting bone health and preventing anemia. They also offer significant amounts of vitamin C, supporting immune health and skin elasticity. Consuming a variety of vegetables helps reduce the risk of chronic diseases like heart disease and diabetes. Additionally, vegetables are low in calories, making them ideal for weight management. Incorporating a wide range of vegetables into daily meals ensures you get all the essential nutrients your body needs for optimal health.
          </div>
        </div>

        {/* Non-Veg Protein Category */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Non-Veg Protein</h2>
          <div className="text-sm text-gray-700">
            Non-veg protein sources, such as chicken, fish, and eggs, are excellent for building muscle and repairing tissues. They are packed with high-quality protein that contains all the essential amino acids needed for optimal body function. Non-veg protein is also rich in important vitamins and minerals, such as B vitamins, which support energy production and brain function. Fish, especially fatty fish like salmon and mackerel, provide omega-3 fatty acids that help reduce inflammation, lower blood pressure, and improve heart health. Chicken is a lean source of protein that aids in muscle growth and repair while supporting metabolic health. Eggs are a complete protein source, providing all the essential amino acids, and they also contain vitamins such as vitamin D and B12. Non-veg protein is crucial for those who engage in physical activities, as it aids in muscle recovery and increases strength. These protein sources also help maintain a strong immune system and promote healthy hair and skin. Non-veg protein can also help in weight management by promoting satiety and reducing cravings. Incorporating non-veg protein into a balanced diet helps support overall health and well-being.
          </div>
        </div>

        {/* Dry Fruits Category */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-xl font-bold text-yellow-700 mb-4">Dry Fruits</h2>
          <div className="text-sm text-gray-700">
            Dry fruits like almonds, walnuts, cashews, and raisins are packed with essential nutrients and offer numerous health benefits. Rich in healthy fats, especially omega-3 fatty acids, dry fruits help promote heart health by reducing bad cholesterol levels. They are also a good source of protein, making them an excellent snack for muscle recovery and growth. Dry fruits are high in fiber, which aids in digestion and promotes a healthy gut. They are also rich in antioxidants, which help fight oxidative stress and reduce the risk of chronic diseases. Many dry fruits, such as almonds, are rich in vitamin E, which helps maintain healthy skin and supports immune function. Dry fruits also provide significant amounts of magnesium, essential for bone health, muscle function, and regulating blood pressure. Consuming dry fruits regularly can help with weight management, as they are nutrient-dense and provide long-lasting energy. They are a great source of iron, which supports healthy red blood cells and prevents anemia. With their sweet taste and crunch, dry fruits are an excellent addition to smoothies, salads, and snacks, providing both flavor and nutrition.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Description;

