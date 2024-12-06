import React from "react";

const HeroSection = () => {
  const proteinData = [
    {
      name: "Protein for Muscle Growth",
      info: "Helps in building and repairing muscles, essential for fitness.",
      image: "https://img.freepik.com/premium-photo/fitness-man-protein-powder-muscle-gain-diet-weight-loss-grey-studio-background-male-athlete-body-builder-sports-nutrition-container-supplement-healthy-energy-drink_590464-120114.jpg?w=400",
    },
    {
      name: "Protein for Weight Loss",
      info: "High-protein diets reduce appetite and boost metabolism.",
      image: "https://img.freepik.com/free-photo/front-view-young-female-sport-outfit-holding-white-sign-o_140725-85441.jpg?t=st=1733254021~exp=1733257621~hmac=f62f7344769b32c88aa1e20db1dd0ca78f4013c6b82d71872ebc5411b6eb4b7f&w=400",
    },
    {
      name: "Protein for Bone Health",
      info: "Adequate protein helps maintain strong and healthy bones.",
      image: "https://img.freepik.com/free-photo/young-woman-with-eating-disorder-food-with-calories-numbers_23-2149168740.jpg?t=st=1733254266~exp=1733257866~hmac=e668b800edaf91b3b693469a091cf67bbfde8c0a7cf4550cfa6094e02765c8a1&w=900",
    },
    {
      name: "Protein for Immunity",
      info: "Vital for creating antibodies to boost the immune system.",
      image: "https://img.freepik.com/free-photo/young-woman-with-eating-disorder-food-with-calories-numbers_23-2149168731.jpg?t=st=1733254377~exp=1733257977~hmac=c1d7cc5fd5ca67454d8d14be06f5a14f275d9dccc994c649e30ae127b95b7278&w=900",
    },
    {
      name: "Protein for Skin & Hair",
      info: "Improves the health of your skin and hair.",
      image: "https://img.freepik.com/premium-photo/cheerful-lady-with-luxury-hair_151013-55492.jpg?w=826",
    },
    {
      name: "Protein for Energy",
      info: "Provides sustained energy throughout the day.",
      image: "https://img.freepik.com/premium-photo/confident-fit-man-preparing-protein-drink-while-standing-kitchen_425904-41623.jpg?w=900",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {proteinData.map((protein, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 hover:scale-105 transform transition duration-300"
        >
          {/* Image */}
          <div
            className="h-40 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${protein.image})` }}
          ></div>
          {/* Content */}
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {protein.name}
            </h3>
            <p className="text-gray-600 text-sm">{protein.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;