"use client"
// import { useState } from 'react';
// import Dropdown from '../Dropdown'; // Adjust the import path as needed

// const SearchBarWithDropdown = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const dummyData = [
//     { name: "About", to: "/about" },
//     { name: "Verification Process", to: "/verification-process" },
//     { name: "Contact Us", to: "/contact-us" },
//     { name: "Services", to: "/services" },
//     { name: "Blog", to: "/blog" },
//   ];

//   const handleSearch = (event) => {
//     event.preventDefault();
//     // Handle the search logic here
//     console.log('Search Term:', searchTerm);
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(true);
//   };

//   const hideDropdown = () => {
//     setTimeout(() => setDropdownVisible(false), 200); // Add a slight delay to allow link click
//   };

//   return (
//     <div className="flex flex-col items-center justify-center mt-10 relative">
//       {/* Search Bar */}
//       <form onSubmit={handleSearch} className="flex items-center justify-center">
//         <div className="relative">
//           <input
//             type="text"
//             className="pl-10 pr-4 py-2 w-1/2 border-2 border-blue-500 rounded-full focus:outline-none"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onFocus={toggleDropdown}
//             onBlur={hideDropdown}
//           />
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//             <img src="/searchIcon.svg" alt="Search" className="h-5 w-5" />
//           </div>
//         </div>
//       </form>

//       {/* Dropdown */}
//       <div className="relative w-1/2">
//         <Dropdown items={dummyData} visible={dropdownVisible} />
//       </div>
//     </div>
//   );
// };

// export default SearchBarWithDropdown;

"use client";
// import { useState } from 'react';
// import Dropdown from '../Dropdown'; 

// const SearchBarWithDropdown = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const dummyData = [
//     { name: "About", to: "/about", logo:"/twitter.svg", url:"facebook.com" },
//     { name: "Verification Process", to: "/verification-process",logo:"/twitter.svg",url:"tesla.com" },
//     { name: "Contact Us", to: "/contact-us",logo:"/twitter.svg",url:"dawat.com" },
//     { name: "Services", to: "/services",logo:"/twitter.svg",url:"nike.com" },
//     { name: "Blog", to: "/blog",url:"adidas.com" },
//   ];

//   const handleSearch = (event) => {
//     event.preventDefault();
//     // Handle the search logic here
//     console.log('Search Term:', searchTerm);
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(true);
//   };

//   const hideDropdown = () => {
//     setTimeout(() => setDropdownVisible(false), 200); // Add a slight delay to allow link click
//   };

//   return (
//     <div className="flex flex-col items-center justify-center mt-10 relative">
//       {/* Search Bar */}
//       <form onSubmit={handleSearch} className="flex items-center justify-center w-full">
//         <div className="relative w-1/2">
//           <input
//             type="text"
//             className="pl-10 pr-4 py-2 w-full border-2 border-blue-500 rounded-full focus:outline-none"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onFocus={toggleDropdown}
//             onBlur={hideDropdown}
//           />
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//             <img src="/searchIcon.svg" alt="Search" className="h-5 w-5" />
//           </div>
//         </div>
//       </form>

//       {/* Dropdown */}
//       <div className="relative w-1/2">
//         <Dropdown items={dummyData} visible={dropdownVisible} />
//       </div>
//     </div>
//   );
// };

// export default SearchBarWithDropdown;
"use client";
import { useState } from 'react';
import Dropdown from '../Dropdown'; // Adjust the import path as needed

const SearchBarWithDropdown = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dummyData = [
    { name: "About", to: "/about", logo:"/twitter.svg", url:"facebook.com" },
    { name: "Verification Process", to: "/verification-process",logo:"/twitter.svg",url:"tesla.com" },
    { name: "Contact Us", to: "/contact-us",logo:"/twitter.svg",url:"dawat.com" },
    { name: "Services", to: "/services",logo:"/twitter.svg",url:"nike.com" },
    { name: "Blog", to: "/blog",url:"adidas.com" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    // Handle the search logic here
    console.log('Search Term:', searchTerm);
  };

  const toggleDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setTimeout(() => setDropdownVisible(false), 200); // Add a slight delay to allow link click
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 relative w-full px-4 md:px-0">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center justify-center w-full">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full border-2 border-blue-500 rounded-full focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={toggleDropdown}
            onBlur={hideDropdown}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img src="/searchIcon.svg" alt="Search" className="h-5 w-5" />
          </div>
          <span className='absolute right-5 top-1/4'>x</span>
        </div>
      </form>

      {/* Dropdown */}
      <div className="relative w-full md:w-1/2">
        <Dropdown items={dummyData} visible={dropdownVisible} />
      </div>
    </div>
  );
};

export default SearchBarWithDropdown;
