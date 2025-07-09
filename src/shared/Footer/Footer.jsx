
// import { useState } from "react"
// import { Send, Mail, Phone, MapPin } from "lucide-react"

// export default function FooterSection() {
//   const [email, setEmail] = useState("")

//   const handleEmailSubmit = (e) => {
//     e.preventDefault()
//     console.log("Email submitted:", email)
//     setEmail("")
//   }

//   return (
//     <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600 text-white">
//       {/* Background overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-teal-600/90"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Company Info Column */}
//           <div className="lg:col-span-1">
//             {/* Logo */}
//             <div className="flex items-center mb-6">
//               <div className="w-10 h-10 mr-3">
//                 <svg viewBox="0 0 40 40" className="w-full h-full">
//                   <rect x="2" y="2" width="36" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
//                   <rect x="8" y="8" width="8" height="8" fill="currentColor" />
//                   <rect x="20" y="8" width="8" height="8" fill="currentColor" />
//                   <rect x="8" y="20" width="8" height="8" fill="currentColor" />
//                   <rect x="20" y="20" width="8" height="8" fill="currentColor" />
//                 </svg>
//               </div>
//               <span className="text-2xl font-bold">Edufy</span>
//             </div>

//             {/* Company Description */}
//             <div className="space-y-4 text-sm leading-relaxed opacity-90">
//               <p>
//                 Edufy, এমন একটি সফটওয়্যার যা প্রতিটি শিক্ষা প্রতিষ্ঠানকে তাদের শিক্ষক, শিক্ষার্থী এবং প্রতিষ্ঠান পরিচালনা করতে সাহায্য করে।
//               </p>
//               <p>
//                 সর্বোচ্চ শিক্ষার্থী ও শুল্কগুলোর চাহিদা পূরণ করার জন্য আমাদের কাছে বিভিন্ন পণ্য এবং পরিষেবা রয়েছে। ভবিষ্যৎ কার্যক্রম থাকে তুলে
//                 করে শিক্ষার্থীদের উপকারিতে দেয়া, ট্যাক্স মুক্ত, কাজ পরিচালনা করা, বাজার কাজ, পরীক্ষা পরিচালনা সহ আরোতিরিক্ত কার্যক্রম পরিচালনার সকল
//                 দিক, শিক্ষক ও কর্মচারীদের পরিচালনা এবং রিপোর্ট তৈরি সহ আরও অনেক কিছু হয়ে যায়।
//               </p>
//               <p>
//                 শিক্ষা প্রতিষ্ঠানগুলিকে তাদের কর্মকাণ্ড ডিজিটাইজ এবং আরও কার্যকরভাবে চালানো প্রতিষ্ঠানিত সাহায্য করতে, Edufy সাহায্য গুলো ও
//                 নিরন্তরতায় শিক্ষা ব্যবস্থাপনার একটি সহজ সমাধান।
//               </p>
//               <p className="pt-4 border-t border-white/20">আমাদের হট লাইনের নম্বর হল: ০৫-৫৯১৭৫</p>
//             </div>
//           </div>

//           {/* Quick Links Column */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">কুইক লিংক</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   Edufy সম্পর্কে
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   হোমপেজ
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   রেট / ফেস স্ট্যাটাস
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Institution Column */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">প্রতিষ্ঠান</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   কোম্পানী সম্পর্কে
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   শপ
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   সেবা
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   যোগাযোগ করুন
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   পার্টনার
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-teal-300 transition-colors duration-200"
//                 >
//                   Refund Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Column */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">আমাদের সাথে যোগাযোগ করুন</h3>

//             {/* Contact Information */}
//             <div className="space-y-4 mb-8">
//               <div className="flex items-start space-x-3">
//                 <Mail className="w-5 h-5 mt-0.5 text-teal-300 flex-shrink-0" />
//                 <div>
//                   <p className="text-sm font-medium">info@edufy.cloud</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <Phone className="w-5 h-5 mt-0.5 text-teal-300 flex-shrink-0" />
//                 <div className="text-sm space-y-1">
//                   <p>+880 1894-430505</p>
//                   <p>+880 1894-430504</p>
//                   <p>+880 1730-797262</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <MapPin className="w-5 h-5 mt-0.5 text-teal-300 flex-shrink-0" />
//                 <div className="text-sm">
//                   <p>বাজারা লা মাইকেট দে অহমেন, ছুটার #রিং,</p>
//                   <p>ব্লক #৭১, রোড #২৭, জনপদ-০১,</p>
//                   <p>ঢাকা-১২১২</p>
//                 </div>
//               </div>
//             </div>

//             {/* Newsletter Signup */}
//             <div>
//               <p className="text-sm mb-4 opacity-90">
//                 আমাদের বিশেষ অফার সুবিধাগুলো এবংতাই বুঝে নিন। আপনার শিক্ষা পরিচালনার পাশে আছি আমরা
//               </p>

//               <form onSubmit={handleEmailSubmit} className="flex">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter email address"
//                   className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-r-lg transition-colors duration-200 flex items-center justify-center"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }


import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import carBg from "../../assets/image/carBg.jpeg"

const quickLinks = [
  "Edufy সম্পর্কে",
  "হোমপেজ",
  "রেট / ফেস স্ট্যাটাস"
]

const institutionLinks = [
  "কোম্পানী সম্পর্কে",
  "শপ",
  "সেবা",
  "যোগাযোগ করুন",
  "পার্টনার",
  "Privacy Policy",
  "Terms of Service",
  "Refund Policy"
]

export default function FooterSection() {
  const [email, setEmail] = useState("")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(13,148,136,0.85), #11375b), url(${carBg})`, // Change path as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-3">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <rect x="2" y="2" width="36" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="8" y="8" width="8" height="8" fill="currentColor" />
                  <rect x="20" y="8" width="8" height="8" fill="currentColor" />
                  <rect x="8" y="20" width="8" height="8" fill="currentColor" />
                  <rect x="20" y="20" width="8" height="8" fill="currentColor" />
                </svg>
              </div>
              <span className="text-2xl font-bold">Edufy</span>
            </div>

            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <p>Edufy, এমন একটি সফটওয়্যার যা প্রতিটি শিক্ষা প্রতিষ্ঠানকে তাদের শিক্ষক, শিক্ষার্থী এবং প্রতিষ্ঠান পরিচালনা করতে সাহায্য করে।</p>
              <p>সর্বোচ্চ শিক্ষার্থী ও শুল্কগুলোর চাহিদা পূরণ করার জন্য আমাদের কাছে বিভিন্ন পণ্য এবং পরিষেবা রয়েছে।</p>
              <p>Edufy শিক্ষা ব্যবস্থাপনার একটি সহজ সমাধান।</p>
              <p className="pt-4 border-t border-white/20">হটলাইন: ০৫-৫৯১৭৫</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">কুইক লিংক</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm opacity-90 hover:text-teal-300 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">প্রতিষ্ঠান</h3>
            <ul className="space-y-3">
              {institutionLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm opacity-90 hover:text-teal-300 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">যোগাযোগ করুন</h3>

            <div className="space-y-4 mb-8 text-sm">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-300" />
                <p>info@edufy.cloud</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-300" />
                <div>
                  <p>+880 1894-430505</p>
                  <p>+880 1894-430504</p>
                  <p>+880 1730-797262</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-300" />
                <div>
                  <p>বাজার লা মাইকেট দে অহমেন, রোড #২৭</p>
                  <p>জনপদ-০১, ঢাকা-১২১২</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <p className="text-sm mb-4">বিশেষ অফার ও আপডেট পেতে আমাদের সঙ্গে থাকুন।</p>
            <form onSubmit={handleEmailSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল"
                className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-r-lg transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
