import team1 from "/images/team1.png";
import team2 from "/images/team2.png";
import team3 from "/images/team3.png";

function VetCareTeam() {
  return (
    <section className="lg:px-[142px] min-h-screen">
      <div className="text-center max-w-screen-sm mx-auto py-10">
        <h1 className="text-5xl font-bold pt-4 text-text-blue">The VetCare Team</h1>
        <p className="text-text-blue pt-4 font-normal text-xl">
          We strive for high quality and professionalism, offering innovative solutions and reliable services in our field.
        </p>
      </div>
      
      <div className="custom-grid">
        {[
          { img: team1, name: "Jennifer Mullen", role: "VETERINARY" },
          { img: team2, name: "Sheeren Collins", role: "ADMINISTRATION" },
          { img: team3, name: "Michael Johnson", role: "VETERINARY" },
        ].map((member, index) => (
          <div key={index} className="text-text-blue text-center">
            <img src={member.img} alt={member.name} className="mx-auto h-80 " />
            <h4 className="text-3xl font-medium py-4">{member.name}</h4>
            <p className="text-xl font-light">{member.role}</p>
            
            <div className="flex justify-center gap-4 mt-4">
              {["instagram", "facebook", "twitter", "whatsapp"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-[#fcc302] flex items-center justify-center rounded-full text-white text-2xl shadow-lg"
                >
                  <i className={`fa-brands fa-${icon}`}></i>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VetCareTeam;


