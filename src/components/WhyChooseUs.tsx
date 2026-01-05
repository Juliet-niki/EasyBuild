import React from "react";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Professionals",
      description:
        "Licensed civil engineers and registered architects handling your project.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We respect deadlines and use advanced project management to stay on track.",
    },
    {
      icon: CheckCircle2,
      title: "Transparent Pricing",
      description:
        "Detailed BOMs and estimates. No hidden costs or last-minute surprises.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Regular updates and collaboration to ensure your vision is realized.",
    },
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 ml:py-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-slate-900 mb-4 sm:mb-5 ml:mb-6 leading-tight">
              Engineering Excellence You Can Count On
            </h2>
            <p className="text-[clamp(14px,1.8vw,18px)] text-slate-600 mb-8 leading-relaxed">
              In a complex industry, we bring clarity and precision. Our
              commitment to quality assurance and regulatory compliance ensures
              your investment is safe and structurally sound for generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="shrink-0 mt-1">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary-200/50 rounded-3xl rotate-3 blur-sm"></div>
            <img
              src="/images/house1.jpg"
              alt="Site Meeting"
              className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-100"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-60 border border-slate-100 hidden md:block">
              <p className="text-xl font-bold text-primary-600 mb-1">100%</p>
              <p className="text-slate-700 font-medium">Compliance Rate</p>
              <p className="text-slate-500 text-xs mt-2">
                Strict adherence to local building codes and safety regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
