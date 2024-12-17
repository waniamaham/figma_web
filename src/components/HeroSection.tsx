import React from "react";

// Data Array for Cards
const card1 = [
  {
    title: "Trenton modular sofa_3",
    image: "/image4.png",
    price: "RS. 35,000/-"
  },
  {
    title: "Granite dining table with dining chair",
    image: "/image5.png",
    price: "RS. 25,000/-"
  },
  {
    title: "Outdoor bar table and stool",
    image: "/image6.png",
    price: "RS. 45,000/-"
  },
  {
    title: "Plain console with teak mirror",
    image: "/image7.png",
    price: "RS. 58,000/-"
  },
];
const cardData = [
  {
    title: "Syltherine",
    description: "Stylish Cafe Chair",
    price:"21,900",
    image: "/card1.png",
  },
  {
    title: "Lolito",
    description: "Luxury Full Size Sofa",
    price:"47,999",
    image: "/card2.png",
  },
  {
    title: "Leviosa",
    description: "Unique Corner Sofa",
    price:"78,999",
    image: "/card3.jpeg",
  },
  {
    title: "Grifo",
    description:"Moderan Night Lamp",
    price:"49,999",
    image: "/card4.png",
  },
  {
    title: "Muggo",
    description: "Small Mug",
    price:"58,999",
    image: "/card5.png",
  },
  {
    title: "Pinky",
    description: "Cute Bed Set",
    price:"52,999",
    image: "/card6.jpeg",
  },
  {
    title: "Two Section Sofa",
    description: "Brown Comfortable Sofa",
    price:"38,999",
    image: "/card7.jpeg",
  },
  {
    title: "Dinning Table",
    description: "6 Persons Dinning Table",
    price:"35,000",
    image: "/card8.png",
  },
];


const HeroSection = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="relative bg-[#FBEBB5] h-screen flex items-center justify-center p-8 md:p-20">
  {/* Content Container */}
  <div className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto">
    {/* Left Side: Text */}
    <div className="flex-1 text-left md:pr-12">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
        Rocket Single Seater
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Experience the ultimate comfort and style with our single-seater rocket chair, designed for all spaces.
      </p>
      <button className="mt-6 relative text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full text-gray-600 px-- py-3 font-semibold transition-all duration-300">
        Shop Now
      </button>
    </div>

    {/* Right Side: Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="image1.png"
        alt="Rocket Single Seater"
        className="w-full max-w-lg md:max-w-6xl drop-shadow-lg"
      />
      
    </div>
  </div>
</div>

{/* section 2 */}
<div className="bg-[#FAF4F4] py-10 flex flex-wrap justify-center lg:gap-80 ">
  {/* First Item */}
  <div className="flex flex-col text-left gap-4 max-w-[350px]">
    <img
      src="image2.png"
      alt="Side Table"
      className="w-full h-auto drop-shadow-lg"
    />
    <h2 className="text-lg font-semibold mt-4">Side Table</h2>
    <button className="mt-2 text-left relative text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-24 text-black py-3 font-normal transition-all duration-200">
        View More
      </button>
  </div>

  {/* Second Item */}
  <div className="flex flex-col items-center text-center gap-4 max-w-[350px] pt-24">
    <img
      src="image3.png"
      alt="Sofa"
      className="w-full h-auto drop-shadow-lg"
    />
    <h2 className="text-lg font-semibold mt-4">Side Table</h2>
    
    <button className="mt-2 relative text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-24 text-black py-3 font-normal transition-all duration-200">
        View More
      </button>
  </div>
</div>
      <div className=" bg-white py-10">
        <h6 className="text-center text-3xl sm:text-4xl mb-10 font-extralight ">
        Top Picks For You
        </h6>
        <p className="text-gray-500 pb-12 flex justify-center items-center text-xl">
        Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-14 px-4 max-w-7xl mx-auto">
          {card1.map((card, index) => (
            <div
              key={index}
              className="bg-transparent rounded-sm p-5 hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-t-lg h-96 w={381px} object-contain"
              />
              <h3 className="text-xl text-left font-sans mt-4">{card.title}</h3>
              <h1 className="text-2xl text-left font-sans mt-3 font-bold">{card.price}</h1>
            </div>
          ))}
        </div> 
        <div className="text-center flex justify-center mt-3 ">
        <button className="mt-2 text-2xl relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full text-black px-- py-3 font-normal transition-all duration-300">
        View More
      </button>
      </div>
  </div>
  
   
  <div className="bg-[#FBEBB5] ">
      <img src="image8.png" alt="Asgaard sofa" />
    </div>


      {/* Cards Section */}
      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-3xl sm:text-4xl mb-8 font-extralight">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg md:mt-6 md:ml-9 rounded-md p-3 hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-t-md h-72 w-full object-cover"
              />
              <h3 className="text-xl text-left font-bold ml-3 mt-3">{card.title}</h3>
              <h4 className="text-base text-left font-normal ml-3 mt-1 text-gray-500">{card.description}</h4>
              <h6 className="text-left text-xl text-black font-bold ml-3 mt-3">Price: {card.price} /-</h6>
            </div>))}
            <div className="flex justify-center place-items-center w-full lg:ml-[490px] h-40">
  <button className="bg-transparent px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 
                     rounded-md border-4 border-yellow-600 hover:bg-yellow-600 
                     transition-all duration-300 text-sm md:text-base lg:text-lg">
    Show More
  </button>
</div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-orange-100 text-center h-auto lg:h-[750px] items-center lg:items-start">
  {/* Left Section */}
  <div className="lg:w-1/2 text-left p-6 lg:p-16 lg:pt-[20%]">
    <h6 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
      50+ Beautiful rooms inspiration
    </h6>
    <p className="text-slate-500 text-base md:text-lg">
      Our designer already made a lot of beautiful prototype of rooms that inspire you.
    </p>
    <div className="pt-10">
    <button className="bg-transparent px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border-4 border-yellow-600 hover:bg-yellow-600 transition-all duration-300 text-sm md:text-base lg:text-lg">
                 Explore More
                  </button>
    </div>
  </div>

  {/* Right Section */}
  <div className="lg:w-1/2 p-10 ">
    <img
      src="section3.png"
      alt="Room Inspiration"
      className="rounded-lg  w-full lg:w-auto h-auto lg:max-w-md"
    />
  </div>
</div>

    </div>
  );
};

export default HeroSection;
