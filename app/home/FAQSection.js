"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I post a job on Spreads?",
      answer:
        "You can sign up, create your company profile, and publish roles in just a few clicks using our intuitive employer dashboard.",
    },
    {
      question: "Is it free to post jobs?",
      answer:
        "Yes! We currently offer free job postings for verified companies and organizations.",
    },
    {
      question: "Who will see my job listings?",
      answer:
        "Your roles are automatically shown to active students and job seekers based on skill, location, and interest—boosting visibility from day one.",
    },
    {
      question: "Can I manage applicants directly on the platform?",
      answer:
        "Absolutely. You can review applications, filter resumes, and communicate with candidates from your dashboard.",
    },
    {
      question: "How does Spreads help attract student talent?",
      answer:
        "Spreads is deeply integrated into student communities and universities. We also boost visibility through microblogging, featured roles, and AI-match campaigns.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-blue-600 font-bold text-lg mt-1">
                    {index + 1}.
                  </span>
                  <h3 className="text-lg md:text-lg font-semibold text-gray-900 leading-relaxed">
                    {faq.question}
                  </h3>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="ml-8 pt-2">
                    <p className="text-gray-600 text-base md:text-md leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Our support team is here to help you get started with Spreads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
