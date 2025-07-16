// import { ChevronDown, Menu } from "lucide-react";
// import { useEffect, useState } from "react";


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])
//     return (
//         <div>
//            <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? "bg-white shadow-lg" : "bg-white"
//         }`}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg flex items-center justify-center transform rotate-12">
//                   <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
//                     <div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
//                   </div>
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
//               </div>
//               <span className="text-2xl font-bold text-gray-800">Tramessy</span>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-8">
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-teal-500 transition-colors font-medium border-b-2 border-teal-500 pb-1"
//               >
//                 হোম
//               </a>
//               <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                 ফিচার
//               </a>
//               <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                 প্যাকেজ এবং প্রাইস
//               </a>
//               <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                 টেস্টিমনি
//               </a>
//               <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                 প্রাইসিং
//               </a>
//               <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                 আমাদের সম্পর্কে
//               </a>
//               <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                 রিসোর্স
//               </a>
//               <div className="relative group">
//                 <button className="flex items-center space-x-1 text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                   <span>আরো</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//               </div>
//             </nav>

//             {/* CTA Button */}
//             <div className="hidden lg:block">
//               <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium transform hover:scale-105">
//                 ডেমো রিকুয়েস্ট
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white border-t shadow-lg">
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col space-y-4">
//                 <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                   হোম
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                   ফিচার
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                   প্যাকেজ এবং প্রাইস
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                   টেস্টিমনি
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                   প্রাইসিং
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                   আমাদের সম্পর্কে
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                   রিসোর্স
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
//                   আরো
//                 </a>
//                 <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-colors w-full font-medium">
//                   ডেমো রিকুয়েস্ট
//                 </button>
//               </nav>
//             </div>
//           </div>
//         )}
//       </header>
//         </div>
//     );
// };

// export default Navbar;



import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import logo from "../../assets/logo.svg"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "হোম", href: "#", active: true },
    { name: "ফিচার", href: "/features" },
    { name: "প্যাকেজ এবং প্রাইস", href: "#" },
    { name: "রিভিউ", href: "#" },
    { name: "আমাদের সম্পর্কে", href: "#" },
    { name: "যোগাযোগ", href: "#" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="">
            <img src={logo} alt="tramessy logo" style={{ height: "30px" }} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                  item.active ? "border-b-2 border-primary pb-1" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium transform hover:scale-105">
              ডেমো রিকুয়েস্ট
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-teal-500 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a href="#" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
                আরো
              </a>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-colors w-full font-medium">
                ডেমো রিকুয়েস্ট
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
