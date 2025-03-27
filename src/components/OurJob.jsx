import ourjob from "/images/ourjob.png";
import ourjob2 from "/images/ourjob2.png";
import ourjob3 from "/images/ourjob3.png";

function OurJob() {
    return ( <>

    <section className="  bg-main-yellow lg:px-[142px] min-h-screen ">
        <div className= "text-center max-w-screen-sm  mx-auto  py-10"> 
            <h1 className="text-white text-5xl font-bold pt-4" >Our Job</h1>
            <p className="text-white pt-4 font-normal text-xl">We strive for high quality and professionalism, offering innovative solutions and reliable services in our field</p>
        </div>
        <div className="custom-grid">
            <div >
                <img src={ourjob} alt="Vetrinarian" className="mx-auto h-80 " />
                <h4 className="text-3xl font-medium  py-4">Vetrinarian</h4>
                <p className="text-xl font-light">We strive for high quality and professionalism, offering innovative solutions and reliable services in our field</p>
            </div>
            <div>
                <img src={ourjob2} alt="Veterinar"className="mx-auto h-80 " />
                <h4 className="text-3xl font-medium py-4">Vaccination Care</h4>
                <p className="text-xl font-light ">We ensure your pets stay healthy with safe and effective vaccinations, protecting them from common diseases</p>
            </div>
            <div>
                <img src={ourjob3} alt="Veterinar" className="mx-auto h-80 " />
                <h4 className="text-3xl font-medium py-4">Dental Care</h4>
                <p className="text-lg font-light">We provide professional dental care to keep your pet’s teeth clean and healthy, preventing oral diseases</p>
            </div>
        </div>
    </section>
    </> );
}

export default OurJob;