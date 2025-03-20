function NavBar() {
    return (
      <header className="bg-header-yellow px-[142px]">
        <nav className="flex items-center h-20 ">
          <ul className="flex w-full justify-between items-center">
            <li><img src="/images/company-logo.png" alt="Company Logo" className="h-10" /></li>
            <li>
            <a href="/" className="text-white text-[18px] font-medium font-poppins">Home</a>

            </li>
            <li>
              <a href="/about" className="text-white text-[18px] font-medium font-poppins">About</a>
            </li>
            <li>
              <a href="/service" className="text-white text-[18px] font-medium font-poppins">Service</a>
            </li>
            <li>
              <a href="/contact" className="text-white text-[18px] font-medium font-poppins">Contact</a>
            </li>
            <li>
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Search.." 
                  className="px-3 py-2 rounded-l-md text-white bg-custom-yellow"
                />
                <button className="px-4 py-2 bg-custom-blue text-white rounded-r-md">
                  <i className="fas fa-search"></i> 
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default NavBar;
  
