import dogVideoImage2 from "/images/videoDog2.png";

function AnimalLoverSection2() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center py-10 px-6 sm:px-10 md:px-[142px] min-h-screen">
       
        <div className="mt-10 lg:mt-0 lg:mr-10 flex justify-center">
          <img
            src={dogVideoImage2}
            alt="Dog"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto"
          />
        </div>
        <div className="flex-1 pr-6 pt-12 md:pt-16 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-8 text-text-blue">
            As a veterinarian and lover of animals.
          </h2>
          <p className="text-[#313243] text-lg sm:text-xl md:text-2xl pb-8">
            Lorem ipsum available but the majority suffered alteration in some
            form, by humour randomised words.
          </p>
          <button className="px-6 py-3 bg-main-yellow font-semibold rounded text-white">
            Our Service
          </button>
        </div>
      </section>
    </>
  );
}

export default AnimalLoverSection2;