// import PageHero from "../../components/helpingComp/PageHero";

// import { Check } from "lucide-react"

// import Button from "../../components/helpingComp/Button";
// import { pricingPlans } from "../../data/pricing-data";
// import { useInView } from "../../shared/hooks/UseInView";

// const PackagePricing = () => {
//   const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
//   const breadcrumbs = [
//     { label: "Home", href: "/" },
//     { label: "প্যাকেজ এবং প্রাইস" }, 
//   ]

//   return (
//     <section ref={sectionRef} className="py-16 bg-gray-50">
//         <PageHero title="প্যাকেজ এবং প্রাইস" breadcrumbs={breadcrumbs} />
//       <div className="container mx-auto px-4">
//         <h2
//           className={`text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`}
//         >
//           আমাদের মূল্য পরিকল্পনা
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {pricingPlans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center border-2 ${
//                 plan.isPopular ? "border-feature-icon" : "border-gray-200"
//               } ${isSectionInView ? "animate-fade-up" : "opacity-0"}`}
//               style={{ animationDelay: isSectionInView ? `${index * 0.15}s` : "0s" }}
//             >
//               {plan.isPopular && (
//                 <span className="absolute -top-3 px-4 py-1 bg-feature-icon text-white text-xs font-semibold rounded-full shadow-md">
//                   জনপ্রিয়
//                 </span>
//               )}
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
//               <p className="text-5xl font-extrabold text-feature-icon mb-2">{plan.price}</p>
//               <p className="text-gray-600 text-lg mb-6">{plan.period}</p>
//               <p className="text-gray-700 font-semibold mb-6">{plan.vehicleRange}</p>
//               <ul className="text-gray-700 text-left space-y-3 mb-8 flex-grow">
//                 {plan.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-start gap-2">
//                     <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <Button variant="default" className="w-full">
//                 {plan.buttonText}
//               </Button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PackagePricing




import { BarChart3, Check, Crown, Settings, Truck } from "lucide-react"

// import { pricingPlans } from "../../data/pricing-data"
import { useInView } from "../../shared/hooks/UseInView"
import Button from "../../components/helpingComp/Button"
import PageHero from "../../components/helpingComp/PageHero"
import PricingCard from "../../components/PackagePricing/PricingCard"

const PackagePricing = () => {
  const pricingPlans = [
    {
      title: 'বেসিক',
      subtitle: 'ছোট ট্রান্সপোর্ট ব্যবসা, নতুন উদ্যোক্তা, স্টার্টআপ',
      price: '১,৪৯৯৳',
      period: 'মাস',
      icon: <Truck className="h-6 w-6" />,
      gradient: 'from-green-400 to-green-600',
      buttonText: 'বেসিক প্ল্যান কিনুন',
      features: [
        { text: '১ থেকে ৫টি গাড়ি ম্যানেজমেন্ট', included: true },
        { text: 'বেসিক ট্রিপ বুকিং ও হিসাব', included: true },
        { text: 'ড্রাইভার ও স্টাফ ম্যানেজমেন্ট', included: true },
        { text: 'ইনভয়েস জেনারেশন ও বিলিং', included: true },
        { text: '২৪/৭ কাস্টমার সাপোর্ট (ইমেইল ও চ্যাট)', included: true },
        { text: 'একজন ইউজার অ্যাক্সেস', included: true },
        { text: 'GPS ট্র্যাকিং', included: false },
        { text: 'অ্যাডভান্সড রিপোর্টিং', included: false },
      ]
    },
    {
      title: 'স্ট্যান্ডার্ড',
      subtitle: 'মাঝারি আকারের ট্রান্সপোর্ট ব্যবসা',
      price: '২,৪৯৯৳',
      period: 'মাস',
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: 'from-blue-500 to-teal-600',
      buttonText: 'স্ট্যান্ডার্ড প্ল্যান কিনুন',
      isPopular: true,
      features: [
        { text: '৫ থেকে ১০টি গাড়ি ম্যানেজমেন্ট', included: true },
        { text: 'অ্যাডভান্সড ট্রিপ ও রুট ম্যানেজমেন্ট', included: true },
        { text: 'ফুয়েল ট্র্যাকিং ও খরচ বিশ্লেষণ', included: true },
        { text: 'চালক ও স্টাফদের বেতন ও কমিশন হিসাব', included: true },
        { text: 'রিপোর্ট ডাউনলোড (PDF, Excel)', included: true },
        { text: 'SMS/Email নোটিফিকেশন সিস্টেম', included: true },
        { text: 'মাল্টি-ইউজার এক্সেস (৩ জন পর্যন্ত)', included: true },
        { text: 'GPS রিয়েল-টাইম ট্র্যাকিং', included: false },
      ]
    },
    {
      title: 'প্রো প্ল্যান',
      subtitle: 'বড় আকারের ট্রান্সপোর্ট ব্যবসা',
      price: '4999৳',
      period: 'মাস',
      icon: <Crown className="h-6 w-6" />,
      gradient: 'from-purple-500 to-pink-600',
      buttonText: 'প্রো প্ল্যান কিনুন',
      features: [
        { text: '১০-২০টি গাড়ি ম্যানেজমেন্ট', included: true },
        { text: 'GPS রিয়েল-টাইম ট্র্যাকিং ও লাইভ মনিটরিং', included: true },
        { text: 'কাস্টমাইজড ট্রিপ রুট অপ্টিমাইজেশন', included: true },
        { text: 'অটোমেটেড ভেহিকেল মেইনটেন্যান্স নোটিফিকেশন', included: true },
        { text: 'কাস্টমাইজড রিপোর্টিং ও বিশ্লেষণ', included: true },
        { text: 'পার্টনার ও ক্লায়েন্ট ম্যানেজমেন্ট', included: true },
        { text: 'মাল্টি-ইউজার এক্সেস (১০ জন পর্যন্ত)', included: true },
        { text: 'ডেডিকেটেড একাউন্ট ম্যানেজার ও লাইভ সাপোর্ট', included: false },
      ]
    },
    {
      title: 'প্রিমিয়াম',
      subtitle: 'বড় আকারের ট্রান্সপোর্ট ব্যবসা',
      price: '৭,৯৯৯৳',
      period: 'মাস',
      icon: <Crown className="h-6 w-6" />,
      gradient: ' from-blue-500 to-purple-600',
      buttonText: 'প্রিমিয়াম প্ল্যান কিনুন',
      features: [
        { text: '২০-৫০টি গাড়ি ম্যানেজমেন্ট', included: true },
        { text: 'GPS রিয়েল-টাইম ট্র্যাকিং ও লাইভ মনিটরিং', included: true },
        { text: 'কাস্টমাইজড ট্রিপ রুট অপ্টিমাইজেশন', included: true },
        { text: 'অটোমেটেড ভেহিকেল মেইনটেন্যান্স নোটিফিকেশন', included: true },
        { text: 'কাস্টমাইজড রিপোর্টিং ও বিশ্লেষণ', included: true },
        { text: 'পার্টনার ও ক্লায়েন্ট ম্যানেজমেন্ট', included: true },
        { text: 'মাল্টি-ইউজার এক্সেস (১০ জন পর্যন্ত)', included: true },
        { text: 'ডেডিকেটেড একাউন্ট ম্যানেজার ও লাইভ সাপোর্ট', included: true },
      ]
    },
  ];
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  const breadcrumbs = [{ label: "হোম", href: "/" }, { label: "প্যাকেজ এবং প্রাইস" }]
  return (
    <section className="bg-gray-50">
      <PageHero title="প্যাকেজ এবং প্রাইস" breadcrumbs={breadcrumbs} />
      <div ref={sectionRef} className="container mx-auto px-4 py-16">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center text-gray-700 mb-12 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`}
        >
          আমাদের মূল্য পরিকল্পনা
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
              gradient={plan.gradient}
              icon={plan.icon}
              isSectionInView={isSectionInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagePricing
