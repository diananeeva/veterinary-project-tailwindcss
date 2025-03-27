import bgImage from "/images/bg.png";
import { FaHeartbeat, FaStethoscope, FaSyringe } from "react-icons/fa";

function OurAchiev() {
  return (
    <section
      className="min-h-[80vh] bg-cover bg-center flex items-center justify-center px-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 justify-between text-center">
        
        <div>
          <FaHeartbeat className="text-8xl mx-auto mb-4 text-white" />
          <h3 className="text-4xl font-bold text-white">+34,793</h3>
          <p className="text-xl text-white">Happy Clients</p>
        </div>

        <div>
          <FaStethoscope className="text-8xl mx-auto mb-4 text-white" />
          <h3 className="text-4xl font-bold text-white">+45,382</h3>
          <p className="text-xl text-white">Department</p>
        </div>

        <div>
          <FaSyringe className="text-8xl mx-auto mb-4 text-white" />
          <h3 className="text-4xl font-bold text-white">+54,762</h3>
          <p className="text-xl text-white">Vaccinations</p>
        </div>
      </div>
    </section>
  );
}

export default OurAchiev;



