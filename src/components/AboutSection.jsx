import React from "react";

const AboutSection = () => {
  return (
    <section className="relative flex items-center justify-between min-h-screen bg-main-yellow px-[142px] ">
     
      <div className="flex-1 max-w-3xl text-white text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          First I wanted to be a veterinarian
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Lorem Ipsum available but the majority have suffered alteration in
          some form, by injected humour randomised words.
        </p>
        <div className="flex justify-start space-x-4">
          <button className="px-6 py-3 bg-custom-blue hover:bg-blue-600 text-white font-semibold rounded">
            Contact Us
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-orange-500">
            Our Service
          </button>
        </div>
      </div>

      
      <div className="flex-1">
        <img
          src="/images/dog.png"
          alt="Dog"
         className="w-full h-auto object-contain md:w-80 md:h-auto ml-auto mr-10"
        />
      </div>
    </section>
  );
};

export default AboutSection;


  
