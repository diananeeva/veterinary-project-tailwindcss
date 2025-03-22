import React from "react";
import dogImage from "/images/dog.png";

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-main-yellow px-6 md:px-[142px]  py-10">
      
      <div className="flex-1 max-w-3xl text-white text-center lg:text-left mb-10 lg:mb-0 flex flex-col items-center lg:items-start">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          First I wanted to be a veterinarian
        </h1>
        <p className="text-base md:text-xl mb-6">
          At a young age, I dreamed of helping animals and becoming a
          veterinarian. I wanted to care for pets and ensure they lived happy
          and healthy lives.
        </p>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
          <button className="px-6 py-3 bg-custom-blue hover:bg-blue-600 text-white font-semibold rounded">
            Contact Us
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-orange-500">
            Our Service
          </button>
        </div>
      </div>

     
      <div className="flex-1 flex justify-center mt-6 lg:mt-0">
        <img
          src={dogImage}
          alt="Dog"
          className="w-60 md:w-80 lg:w-96 h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default AboutSection;



