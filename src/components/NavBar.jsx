import { useState } from "react";
import companyLogo from "/images/company-logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-header-yellow px-6 md:px-[142px]">
      <nav className="flex items-center h-20 justify-between">
      
        <img src={companyLogo} alt="Company Logo" className="h-10 pr-6" />

        <button 
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✖" : "☰"} 
        </button>

        <ul className="hidden md:flex w-full justify-between items-center gap-x-10">
          {["Home", "About", "Service", "Contact"].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase()}`} className="text-white text-[18px] font-medium font-poppins">
                {item}
              </a>
            </li>
          ))}
          
          
          <li className="w-[250px] flex">
            <input 
              type="text" 
              placeholder="Search.." 
              className="w-full min-w-0 px-3 py-2 rounded-l-md text-white bg-custom-yellow outline-none"
            />
            <button className="px-4 py-2 bg-custom-blue text-white rounded-r-md flex-shrink-0">
              <i className="fas fa-search"></i> 
            </button>
          </li>
        </ul>

        
        {isOpen && (
          <ul className="absolute top-20 left-0 w-full bg-header-yellow flex flex-col items-center space-y-4 py-6 md:hidden transition-all">
            {["Home", "About", "Service", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`/${item.toLowerCase()}`} 
                  className="text-white text-xl font-medium font-poppins"
                  onClick={() => setIsOpen(false)} 
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default NavBar;


  
