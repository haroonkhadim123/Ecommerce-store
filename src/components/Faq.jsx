import React, { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the delivery time?",
      answer: "Our products are usually delivered within 3–5 business days, depending on your location."
    },
    {
      question: "Can I return the product?",
      answer: "Yes, we offer a 7-day easy return policy if the product is unused and in original packaging."
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes, all electronics come with a 6-month warranty. Clothing and accessories do not include a warranty."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking link via email or SMS to monitor your delivery."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] md:w-[70%] mx-auto mt-10">
      <h2 className="text-2xl font-bold border-b-4 border-blue-600 inline-block mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:shadow-md transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
