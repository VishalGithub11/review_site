import Link from 'next/link';

const Dropdown = ({ items, visible }) => {
  // if (!visible) return null;

  return (
    <div className="w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
      <ul>
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex justify-between items-center border-b last:border-b-0 px-4 py-2 hover:bg-gray-100"
          >
            <div className="flex items-center">
              <img src={item.logo || `/logo.svg`} alt="Logo" className="h-5 w-5 mr-2" />
              <p className="text-gray-800">{item.name}</p>
            </div>
            <p className="text-gray-500 text-xs md:text-sm">{item.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
