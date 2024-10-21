// export default function Navbar({ links }) {
//   return(
//     <nav className="navbar">
//       <div className="title-container">
//         <h2>John`s Food Truck</h2>
//       </div>
//       <div className="navbarLinks-container">
//         <div className="navbar-innner">
//           <ul className="navbar-links">
//               {links.map((link, index) => (
//                 <li className='flex justify-center'
//                     key={index.key}>{link}</li>
//               ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

export default function Navbar({ links }) {
  return (
    <nav className="navbar bg-gray-800 p-4">
      <div className="flex justify-center title-container text-white">
        <h2 className="text-2xl font-bold">Johns Food Truck</h2>
      </div>
      <div className="navbarLinks-container">
        <div className="navbar-inner">
          <ul className="navbar-links justify-center flex flex-row space-x-4">
            {links.map((link, index) => (
              <li key={index} className="text-white hover:text-gray-300">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}