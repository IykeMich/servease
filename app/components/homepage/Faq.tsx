"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs: {question: string, answer: string}[] = [
  { question: "How does ServEase work?", answer: "" },
  { question: "Whay services do you offer?", answer: "" },
  { question: "How are services providers vetted?", answer: "" },
  { question: "What if I'm not satisfied with the service?", answer: "" },
  { question: "Can I request the same provider for future services?", answer: "" },
  { question: "How do I pay for services?", answer: "" },
];

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Toggle function for individual FAQ items
  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full mb-12">

      <div className="my-12 px-8 text-center">
        <h1 className="text-xl md:text-3xl">Frequently Asked Questions</h1>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-24 space-y-4">
        {faqs.slice(0, showAll ? faqs.length : 3).map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
            isOpen={expandedIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>

      {/* Toggle View More / View Less */}
      <div className="text-center mt-8">
        <Button
          className="px-4 py-2 !shadow-none !bg-transparent text-black rounded-md hover:bg-transparent hover:underline
          font-raleway font-medium text-xl"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </Button>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-100 rounded-lg shadow-sm" onClick={onClick}>
      {/* Question Block */}
      <div className="flex justify-between rounded-lg items-center px-4 py-4 lg:py-2 cursor-pointer bg-gray-100 hover:bg-gray-300 transition">
        <h3 className="text-base font-medium text-gray-900">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </div>

      {/* Answer Section (Collapsible) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="p-4 text-gray-700">{answer}</p>
      </motion.div>
    </div>
  );
}
