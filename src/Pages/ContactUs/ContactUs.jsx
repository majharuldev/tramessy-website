
// import { useState } from "react"
// import { MapPin, Phone, Mail, Send } from "lucide-react"

// import Button from "../../components/helpingComp/Button"
// import { useInView } from "../../shared/hooks/UseInView"

// const ContactUs = () => {
//   const [formRef, isFormInView] = useInView({ threshold: 0.1 })
//   const [infoRef, isInfoInView] = useInView({ threshold: 0.1 })
//   const [mapRef, isMapInView] = useInView({ threshold: 0.1 })

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Here you would typically send the form data to your backend
//     console.log("Form submitted:", formData)
//     alert("আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।")
//     setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
//   }

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: "আমাদের ঠিকানা",
//       details: "BMS Tech Logistics Ltd. ঢাকা, বাংলাদেশ",
//       delay: "0s",
//     },
//     {
//       icon: Phone,
//       title: "ফোন করুন",
//       details: "+880 1234 567890",
//       delay: "0.1s",
//     },
//     {
//       icon: Mail,
//       title: "ইমেইল করুন",
//       details: "info@tramessy.com",
//       delay: "0.2s",
//     },
//   ]

//   return (
//     <section className="py-16 md:py-24 bg-contact-bg-light">
//       <div className="container mx-auto px-4">
//         <h2
//           className={`text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 ${isFormInView ? "animate-fade-up" : "opacity-0"}`}
//         >
//           আমাদের সাথে যোগাযোগ করুন
//         </h2>

//         {/* Contact Info Cards */}
//         <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {contactInfo.map((item, index) => {
//             const IconComponent = item.icon
//             return (
//               <div
//                 key={index}
//                 className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl ${isInfoInView ? "animate-fade-up" : "opacity-0"}`}
//                 style={{ animationDelay: isInfoInView ? item.delay : "0s" }}
//               >
//                 <div className="w-16 h-16 flex items-center justify-center rounded-full bg-contact-icon bg-opacity-10 text-contact-icon mb-4">
//                   {IconComponent && <IconComponent className="w-8 h-8" />}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-base">{item.details}</p>
//               </div>
//             )
//           })}
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Contact Form */}
//           <div
//             ref={formRef}
//             className={`flex-1 bg-white rounded-lg shadow-md p-8 ${isFormInView ? "animate-fade-in-left" : "opacity-0"}`}
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">আমাদের বার্তা পাঠান</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
//                   আপনার নাম
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-contact-icon focus:border-transparent"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
//                   আপনার ইমেইল
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-contact-icon focus:border-transparent"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
//                   বিষয়
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-contact-icon focus:border-transparent"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
//                   আপনার বার্তা
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-contact-icon focus:border-transparent"
//                   required
//                 ></textarea>
//               </div>
//               <Button type="submit" Icon={Send} className="w-full">
//                 বার্তা পাঠান
//               </Button>
//             </form>
//           </div>

//           {/* Map Section */}
//           <div
//             ref={mapRef}
//             className={`flex-1 bg-white rounded-lg shadow-md overflow-hidden ${isMapInView ? "animate-fade-in-right" : "opacity-0"}`}
//           >
//             <img
//               src="/contact-map.png"
//               alt="Map location"
//               className="w-full h-full object-cover"
//               style={{ minHeight: "300px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Truck,
  Users,
  MessageCircle,
} from 'lucide-react';


const initialFormState= {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
};

const Input = ({
  label,
  name,
  type = 'text',
  required = false,
  value,
  placeholder,
  onChange,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && '*'}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    //   required={required}
      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can integrate toast/axios here
    console.log('✅ Form submitted:', formData);
    alert('ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।');

    // Reset the form
    setFormData(initialFormState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* ✅ Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            আমাদের সাথে যোগাযোগ করুন এবং আপনার ট্রান্সপোর্ট ব্যবসার সমাধান পান
          </p>
        </div>
      </header>

      {/* ✅ Main Section */}
      <main className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        {/* 🔹 Contact Info */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">আমাদের সাথে যোগাযোগ করুন</h2>
          <p className="text-gray-600 text-lg">
            আপনার যেকোনো প্রশ্ন বা সহায়তার জন্য আমরা সর্বদা প্রস্তুত।
          </p>

          {/* Cards */}
          {[
            {
              icon: <Phone className="h-6 w-6 text-blue-600" />,
              label: 'ফোন',
              details: ['+৮৮০ ১৭১২ ৩৪৫৬৭৮', '+৮৮০ ১৯৮৭ ৬৫৪৩২১'],
              bg: 'bg-blue-100',
            },
            {
              icon: <Mail className="h-6 w-6 text-green-600" />,
              label: 'ইমেইল',
              details: ['support@tramesy.com', 'info@tramesy.com'],
              bg: 'bg-green-100',
            },
            {
              icon: <MapPin className="h-6 w-6 text-purple-600" />,
              label: 'ঠিকানা',
              details: ['১২৩/এ, গুলশান এভিনিউ', 'গুলশান-২, ঢাকা-১২১২'],
              bg: 'bg-purple-100',
            },
            {
              icon: <Clock className="h-6 w-6 text-orange-600" />,
              label: 'সময়সূচি',
              details: [
                'সোমবার - শুক্রবার: ৯:০০ - ১৮:০০',
                'শনিবার: ১০:০০ - ১৬:০০',
                '২৪/৭ অনলাইন সাপোর্ট',
              ],
              bg: 'bg-orange-100',
            },
          ].map((info, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`${info.bg} p-3 rounded-full`}>{info.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                {info.details.map((line, i) => (
                  <p key={i} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            {[
              {
                icon: <Truck className="h-8 w-8 mx-auto mb-2" />,
                label: 'সন্তুষ্ট গ্রাহক',
                value: '১০০০+',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: <Users className="h-8 w-8 mx-auto mb-2" />,
                label: 'গাড়ি ম্যানেজ করা হচ্ছে',
                value: '৫০০০+',
                color: 'from-green-500 to-green-600',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center p-6 bg-gradient-to-r ${stat.color} text-white rounded-xl`}
              >
                {stat.icon}
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 Contact Form */}
        <section className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              আমাদের সাথে যোগাযোগ করুন
            </h3>
            <p className="text-gray-600">
              আপনার বার্তা পাঠান এবং আমরা শীঘ্রই যোগাযোগ করব
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="নাম"
                name="firstName"
                required
                value={formData.firstName}
                placeholder="আপনার নাম লিখুন"
                onChange={handleInputChange}
              />
              <Input
                label="পদবি"
                name="lastName"
                value={formData.lastName}
                placeholder="আপনার পদবি লিখুন"
                onChange={handleInputChange}
              />
            </div>

            {/* Email + Phone */}
            <Input
              label="ইমেইল"
              name="email"
              type="email"
              required
              value={formData.email}
              placeholder="আপনার ইমেইল ঠিকানা"
              onChange={handleInputChange}
            />

            <Input
              label="ফোন নম্বর"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              placeholder="+৮৮০ ১৭XX XXXXXX"
              onChange={handleInputChange}
            />

            {/* Company + Subject */}
            <Input
              label="প্রতিষ্ঠানের নাম"
              name="company"
              value={formData.company}
              placeholder="আপনার প্রতিষ্ঠানের নাম"
              onChange={handleInputChange}
            />

            <Input
              label="বিষয়"
              name="subject"
              required
              value={formData.subject}
              placeholder="বার্তার বিষয়"
              onChange={handleInputChange}
            />

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                বার্তা *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="আপনার বিস্তারিত বার্তা লিখুন..."
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center"
            >
              <Send className="mr-2 h-5 w-5" />
              বার্তা পাঠান
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            আমরা সাধারণত ২৪ ঘন্টার মধ্যে উত্তর দিয়ে থাকি
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
