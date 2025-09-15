import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import CountUpNumber from "@/components/CountUpNumber";
import client1 from "@/assets/clients/client_1.avif";
import client2 from "@/assets/clients/client_2.avif";
import client3 from "@/assets/clients/client_3.avif";
import client4 from "@/assets/clients/client_4.avif";

type TestimonialsProps = {
  id?: string;
};

const Testimonials: React.FC<TestimonialsProps> = ({ id = "testimonials" }) => {
  const testimonials = [
    {
      text:
        "Our new website not only looks amazing but also helped us show up on Google.",
      name: "Valeriya Yakusheva",
      company: "Tech School",
      image: client1,
    },
    {
      text: "The process was easy and stress-free. Now clients can actually find us online.",
      name: "Sergey",
      company: "VTC service",
      image: client2,
    },
    {},{},
    {
      text:
        "From zero online presence to fully booked. Couldn't be happier.",
      name: "Alina Dikaya",
      company: "Nail Salon",
      image: client4,
    },
    {
      text: "Delivered exactly what was promised. Our website looks incredible.",
      name: "Dr. Adamskaya",
      company: "Plastic Surgeon",
      image: client3,
    },
  ];

  return (
    <section id={id} className="py-section relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-antonio font-bold mb-5">
            What Our Clients Say
          </h2>
          <p className="text-base max-w-lg">
            Real feedback from businesses who have transformed their online presence with our help
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const isStat = index === 2 || index === 3;
            return (
              <Card
                key={index}
                className={`shadow-medium h-full ${isStat ? 'p-0 overflow-hidden border-0 rounded-lg' : 'p-0'} ${index === 2 ? 'bg-[#303030] text-white' : ''} ${index === 3 ? 'bg-primary text-primary-foreground' : ''}`}
              >
                <CardContent className={`${isStat ? 'p-10 h-full flex flex-col' : 'p-10 h-full flex flex-col'}`}>
                  {index === 2 ? (
                    // Stat card 1: Satisfaction rate 98% (dark background)
                    <div className="h-full flex flex-col items-start text-left">
                      <p className="mb-4 text-[14px]">We've worked with dozens of happy clients</p>
                      <div className="mt-auto">
                        <div className="font-antonio font-bold text-[60px] leading-none text-white">
                          <CountUpNumber end={98} />%
                        </div>
                        <div className="mt-2 text-white/80 text-[14px]">Satisfaction rate</div>
                      </div>
                    </div>
                  ) : index === 3 ? (
                    // Stat card 2: Growth 156% (primary background)
                    <div className="h-full flex flex-col items-start text-left">
                      <p className="mb-4 text-[14px]">Our work helped clients grow their revenue by 156%</p>
                      <div className="mt-auto">
                        <div className="font-antonio font-bold text-[60px] leading-none text-white">
                          <CountUpNumber end={156} />%
                        </div>
                        <div className="mt-2 opacity-90 text-[14px]">Growth</div>
                      </div>
                    </div>
                  ) : (
                    // Regular review card with 5-star rating
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        <div className="flex text-primary">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <p className="italic leading-relaxed text-[14px]">"{testimonial.text}"</p>
                      </div>
                      <div className="flex items-center gap-4 pt-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-[14px]">{testimonial.name}</div>
                          <div className="text-sm text-[14px]">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
