
// import { useEffect, useRef } from "react"

// // Mock Swiper functionality since we can't import external libraries
// const testimonials = [
//   {
//     id: 1,
//     name: "রোহ ইলিয়াস",
//     designation: "পরিচালক",
//     institution: "কাশগঞ্জোলা আদর্শ মাদ্রাসা",
//     image: "/placeholder.svg?height=80&width=80",
//     testimonial:
//       "এডুফাই সফটওয়্যারটি আধুনিক সুযোগ সুবিধা সম্বলিত একটি সফটওয়্যার। একটি প্রতিষ্ঠানের হিসাব নিকাশ থেকে শুরু করে একাডেমিকসহ যাবতীয় তথ্য খুব সহজে ইনপুট দেওয়া যায়। ম্যানুয়াল কাজের তুলনায় থেকে রক্ষা পেতে এডুফাই সফটওয়্যারটি...",
//   },
//   {
//     id: 2,
//     name: "ভদ্র সেন চাকমা",
//     designation: "প্রধান শিক্ষক",
//     institution: "কাচালং বালিকা উচ্চ বিদ্যালয়",
//     image: "/placeholder.svg?height=80&width=80",
//     testimonial:
//       "এডুফাই সফটওয়্যারটি আমরা দীর্ঘদিন থেকে আমাদের প্রতিষ্ঠানের যাবতীয় কাজ বিশেষ করে ভর্তি কার্যক্রম ,হাজিরা প্রদান,ফি এর হিসাব নিকাশ এবং রেজাল্ট তৈরির জন্য ব্যবহার করে আসছি । সফটওয়্যারটি ব্যবহার করার ফলে এখন যেমন...",
//   },
//   {
//     id: 3,
//     name: "মোহাম্মদ আলী",
//     designation: "অধ্যক্ষ",
//     institution: "ঢাকা আইডিয়াল কলেজ",
//     image: "/placeholder.svg?height=80&width=80",
//     testimonial:
//       "এডুফাই সফটওয়্যার ব্যবহার করে আমাদের প্রতিষ্ঠানের সকল কার্যক্রম অনেক সহজ হয়ে গেছে। ছাত্র-ছাত্রীদের তথ্য সংরক্ষণ থেকে শুরু করে ফলাফল প্রকাশ পর্যন্ত সবকিছুই এখন ডিজিটাল পদ্ধতিতে করা যাচ্ছে।",
//   },
//   {
//     id: 4,
//     name: "ফাতেমা খাতুন",
//     designation: "সহকারী প্রধান শিক্ষক",
//     institution: "রাজশাহী সরকারি বালিকা উচ্চ বিদ্যালয়",
//     image: "/placeholder.svg?height=80&width=80",
//     testimonial:
//       "এই সফটওয়্যারটি ব্যবহার করে আমরা আমাদের স্কুলের সকল ডেটা নিরাপদে সংরক্ষণ করতে পারছি। অভিভাবকরাও তাদের সন্তানদের তথ্য সহজেই দেখতে পারেন। এটি সত্যিই একটি চমৎকার সমাধান।",
//   },
// ]

// export default function Review() {
//   const swiperRef = useRef(null)
//   const currentSlide = useRef(0)
//   const totalSlides = Math.ceil(testimonials.length / 2)

//   const updateSlider = () => {
//     if (swiperRef.current) {
//       const translateX = -(currentSlide.current * 100)
//       swiperRef.current.style.transform = `translateX(${translateX}%)`
//     }

//     // Update pagination dots
//     const dots = document.querySelectorAll(".pagination-dot")
//     dots.forEach((dot, index) => {
//       if (index === currentSlide.current) {
//         dot.classList.add("active")
//         dot.classList.remove("inactive")
//       } else {
//         dot.classList.remove("active")
//         dot.classList.add("inactive")
//       }
//     })
//   }

//   const nextSlide = () => {
//     currentSlide.current = (currentSlide.current + 1) % totalSlides
//     updateSlider()
//   }

//   const goToSlide = (index) => {
//     currentSlide.current = index
//     updateSlider()
//   }

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     updateSlider()
//   }, [])

//   // Group testimonials in pairs for desktop view
//   const groupedTestimonials = []
//   for (let i = 0; i < testimonials.length; i += 2) {
//     groupedTestimonials.push(testimonials.slice(i, i + 2))
//   }

//   return (
//     <div className="container mx-auto px-6 py-16 bg-gray-50">
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">গ্রাহকদের অভিজ্ঞতা</h2>
//         <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
//           আমাদের গুরুত্বপূর্ণ গ্রাহক যারা তাদের অভিজ্ঞতা শেয়ার করেছেন। আপনাদের সময় এর সাথে
//           <br />
//           এগিয়ে যেতে পাশে থেকে সাহায্য করাই আমাদের অগ্রাধিকার।
//         </p>
//       </div>

//       {/* Testimonials Swiper */}
//       <div className="relative overflow-hidden">
//         <div
//           ref={swiperRef}
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ width: `${groupedTestimonials.length * 100}%` }}
//         >
//           {groupedTestimonials.map((group, groupIndex) => (
//             <div key={groupIndex} className="w-full flex-shrink-0">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//                 {group.map((testimonial) => (
//                   <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-sm relative">
//                     {/* Large Quote Mark */}
//                     <div className="absolute top-6 left-6 text-6xl text-gray-200 font-serif leading-none">"</div>

//                     {/* Profile Section */}
//                     <div className="flex items-center mb-6 relative z-10">
//                       <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
//                         <img
//                           src={testimonial.image || "/placeholder.svg"}
//                           alt={testimonial.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
//                         <p className="text-gray-600 font-medium mb-1">{testimonial.designation}</p>
//                         <p className="text-sm text-gray-500">"{testimonial.institution}"</p>
//                       </div>
//                     </div>

//                     {/* Testimonial Text */}
//                     <div className="relative z-10">
//                       <p className="text-gray-700 leading-relaxed text-base">{testimonial.testimonial}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={() => {
//             currentSlide.current = currentSlide.current === 0 ? totalSlides - 1 : currentSlide.current - 1
//             updateSlider()
//           }}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
//           aria-label="Previous testimonials"
//         >
//           <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={() => {
//             currentSlide.current = (currentSlide.current + 1) % totalSlides
//             updateSlider()
//           }}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
//           aria-label="Next testimonials"
//         >
//           <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mt-8 space-x-2">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`pagination-dot w-3 h-3 rounded-full transition-colors duration-200 ${
//               index === 0 ? "active bg-teal-500" : "inactive bg-gray-300 hover:bg-gray-400"
//             }`}
//             aria-label={`Go to testimonial slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         .pagination-dot.active {
//           background-color: #14b8a6;
//         }
//         .pagination-dot.inactive {
//           background-color: #d1d5db;
//         }
//         .pagination-dot.inactive:hover {
//           background-color: #9ca3af;
//         }
//       `}</style>
//     </div>
//   )
// }


import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import clientImage from "../../assets/image/No_Image_Available.jpg"

const testimonials = [
  {
    id: 1,
    name: "Nawshad Ahmed",
    designation: "MHR Freight, Chittagong",
    image: "/placeholder.svg?height=80&width=80", 
    testimonial:
      "আমরা আগে আলাদা আলাদা খাতায়, প্রতিদিনের ইনকাম, খরচ, ড্রাইভারদের ভ্রমণের কাস্টমার ডিউটি আলাদা আলাদা লিখে রাখতাম। ট্রামেসি সফটওয়্যার ব্যবহার করার পর সব তথ্য এক সফটওয়্যারেই পাচ্ছি। সবচেয়ে ভালো লাগে, অটোমেটিক রিপোর্ট তৈরি হয় ক্লিকেই কিন্তু ডাউনলোডও করা যায়। এগুলো “আমাদের দেশের ট্রান্সপোর্ট ব্যবসা যেমন চলে” তার জন্য যেমন ম্যানেজমেন্ট, ডিউটি অ্যাসাইনমেন্ট, চালান, বিল তৈরি—সবকিছুই ফিচারেই আছে।"
  },
  {
    id: 2,
    name: "Mohammed Jayed Hassan",
    designation: "Proprietor, H K Logistics",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "ট্রামেসি সফটওয়্যার ব্যবহারের পর থেকে আমাদের পরিবহন পরিচালনায় অনেক গতি এসেছে। গাড়ির বুকিং, ইনকাম-এক্সপেন্স রিপোর্ট—সবকিছু এক ক্লিকে পাচ্ছি। ব্যবহার সহজ, টিমের সাপোর্টও চমৎকার। যারা প্রকল্পভিত্তিক তাদের পরিবহন ব্যবসা ম্যানেজ করতে চান, তাদের জন্য ট্রামেসি একটি অসাধারণ সমাধান।"
  },
  {
    id: 3,
    name: "মোহাম্মদ আলী",
    designation: "অধ্যক্ষ",
    institution: "ঢাকা আইডিয়াল কলেজ",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "ট্রামেসি সফটওয়্যার ব্যবহারের পর থেকে আমাদের পরিবহন পরিচালনায় অনেক গতি এসেছে। গাড়ির বুকিং, ইনকাম-এক্সপেন্স রিপোর্ট—সবকিছু এক ক্লিকে পাচ্ছি। ব্যবহার সহজ, টিমের সাপোর্টও চমৎকার। যারা প্রকল্পভিত্তিক তাদের পরিবহন ব্যবসা ম্যানেজ করতে চান, তাদের জন্য ট্রামেসি একটি অসাধারণ সমাধান।",
  },
  {
    id: 4,
    name: "ফাতেমা খাতুন",
    designation: "সহকারী প্রধান শিক্ষক",
    institution: "রাজশাহী সরকারি বালিকা উচ্চ বিদ্যালয়",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "আমরা আগে আলাদা আলাদা খাতায়, প্রতিদিনের ইনকাম, খরচ, ড্রাইভারদের ভ্রমণের কাস্টমার ডিউটি আলাদা আলাদা লিখে রাখতাম। ট্রামেসি সফটওয়্যার ব্যবহার করার পর সব তথ্য এক সফটওয়্যারেই পাচ্ছি। সবচেয়ে ভালো লাগে, অটোমেটিক রিপোর্ট তৈরি হয় ক্লিকেই কিন্তু ডাউনলোডও করা যায়। এগুলো “আমাদের দেশের ট্রান্সপোর্ট ব্যবসা যেমন চলে” তার জন্য যেমন ম্যানেজমেন্ট, ডিউটি অ্যাসাইনমেন্ট, চালান, বিল তৈরি—সবকিছুই ফিচারেই আছে।",
  },
]

export default function Review() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">গ্রাহকদের অভিজ্ঞতা</h2>
        <p className="text-gray-600 text-md leading-relaxed max-w-3xl mx-auto">
          আমাদের গুরুত্বপূর্ণ গ্রাহক যারা তাদের অভিজ্ঞতা শেয়ার করেছেন। আপনাদের সময় এর সাথে
          <br />
          এগিয়ে যেতে পাশে থেকে সাহায্য করাই আমাদের অগ্রাধিকার।
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="h-[20rem]"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-lg p-8 shadow-lg relative">
              <div className="absolute top-6 left-6 text-6xl text-gray-200 font-serif leading-none">
                "
              </div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={clientImage || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                  <p className="text-gray-600 font-medium mb-1">{testimonial.designation}</p>
                  <p className="text-sm text-gray-500">"{testimonial.institution}"</p>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-gray-700 leading-relaxed text-base line-clamp-4">{testimonial.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}