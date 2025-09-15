import React from "react";
import QAndAList from "@/components/QAndAList";

type FAQProps = {
  id?: string;
};

const FAQ: React.FC<FAQProps> = ({ id = "faq" }) => {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most websites are completed within 2-4 weeks, depending on complexity and content requirements.",
    },
    {
      question: "Can you help me show up on Google?",
      answer:
        "Yes! We optimize every website for local search and can help improve your Google Business Profile too.",
    },
    {
      question: "Do you also manage my Google Business Profile?",
      answer:
        "Absolutely. We can set up, optimize, and maintain your Google Business Profile to maximize local visibility.",
    },
    {
      question: "What if I already have a website?",
      answer:
        "We can audit your current site and either improve it or build a new one that performs better.",
    },
    {
      question: "How much does a new website cost?",
      answer:
        "Pricing depends on scope and features. Most projects fall between $1,500 and $5,000. After a quick call, we’ll provide a fixed quote.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes. We offer monthly care plans that include updates, backups, security monitoring, and small content changes.",
    },
  ];

  return (
    <section id={id} className="py-section relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 max-w-none lg:max-w-md lg:sticky self-start">
            <h2 className="text-4xl lg:text-5xl font-antonio font-bold mb-4 lg:mb-5 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base mt-4 md:mt-6">
              Get answers to the most common questions about our web design and digital marketing services
            </p>
          </div>

          <div className="flex-1 space-y-4">
            <QAndAList
              qAndAnswers={faqs.map((f, i) => ({
                id: i,
                title: f.question,
                description: f.answer,
              }))}
              showImageOnHover={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
