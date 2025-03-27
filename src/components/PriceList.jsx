import dogImg from "/images/dog1.png";
import dogImg2 from "/images/dog2.png";
import dogImg3 from "/images/dog3.png";

function PriceList() {
  return (
    <section className="  bg-main-yellow lg:px-[142px] min-h-screen">
      <div className="text-center max-w-screen-sm  mx-auto  py-10">
        <h1 className="text-white text-5xl font-bold pt-4">Our Promotion</h1>
        <p className="text-white pt-4 font-normal text-xl">
          We offer exclusive promotions to ensure top-notch care for your pets
          at unbeatable prices. Take advantage of our special deals and give
          your pets the best treatment they deserve.
        </p>
      </div>
      <div className="custom-grid ">
        <div>
          <img src={dogImg} alt="SweetDog"  className="mx-auto"/>
          <div className="my-4">
            <span className="price-old">$50</span>
            <span className="price-new">$40</span>
          </div>
          <button className="btn">
            Buy Now
          </button>
        </div>
        <div>
          <img src={dogImg2} alt="SweetDog" className="mx-auto" />
          <div className="my-4">
            <span className="price-old">$50</span>
            <span className="price-new">$40</span>
          </div>
          <button className="btn">
            Buy Now
          </button>
        </div>
        <div>
          <img src={dogImg3} alt="SweetDog" className="mx-auto" />
          <div className="my-4">
            <span className="price-old">$50</span>
            <span className="price-new">$40</span>
          </div>
          <button className="btn">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
