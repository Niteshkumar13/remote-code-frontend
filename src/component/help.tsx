import React, { useState, useCallback,memo } from 'react';
import { useTheme } from '../context/themeContext';
import { faqs } from '../context/constant';
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

interface FAQProps {
  faq: { question: string, answer: string };
  index: number;
  isExpanded: boolean;
  toggleFaq: (index: number) => void;
}

const FAQItem: React.FC<FAQProps> = memo(({ faq, index, isExpanded, toggleFaq}) => {
  return (
    <div className={`p-2  rounded-lg overflow-hidden shadow border-[1px] w-full`}>
      <div className="flex justify-between items-center" onClick={() => toggleFaq(index)}>
        <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
        <button className="text-xl focus:outline-none">
          {isExpanded ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </button>
      </div>
      {isExpanded && <p className=" mt-2">{faq.answer}</p>}
    </div>
  );
}, (prevProps, nextProps) => (
  prevProps.isExpanded === nextProps.isExpanded &&
  prevProps.faq === nextProps.faq
));




const Help: React.FC = () => {
  const { allTheme } = useTheme();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const toggleFaq = useCallback((index: number) => {
    setExpandedFaqIndex(prevIndex => (prevIndex === index ? null : index));
  }, []);


  return (
    <div className='h-[calc(100vh-3rem)] overflow-y-auto w-screen  mt-12 px-16 max-sm:px-4' style={{ backgroundColor: allTheme.body, color: allTheme.textColor }}>
      <div className='h-20 mt-6'>
        <h1 className="text-2xl font-bold text-[orange] mb-2">Help & Support</h1>
        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
      </div>
      <section className="mb-8 w-full">
        <div className="space-y-4 w-full grid place-items-center">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index} 
              isExpanded={expandedFaqIndex === index} 
              toggleFaq={toggleFaq} 
          
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default React.memo(Help);

