import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "When will I receive my product?",
            answer: "Your payment is complete, You will be redirected automatically to the download section of the page. Click the download button your will stated to download on your device."
        },
        {
            question: "What if I don't receive my product after purchase?",
            answer: "We have never faced this issue till now, just send us an email at “info.techquasarservices@gmail.com” with your order details and we will send you a new one. Although, before mailing us, We request you to check your spam & promotional mails as well. Correct email id which you give in cart checkout page."
        },
        {
            question: "What if I lose my product?",
            answer: "I would advise you to download the product after making the purchase. If you encounter any issues after the purchase, please feel free to email me."
        },
        {
            question: "How long can I access the material?",
            answer: "You will have lifetime access to the bundle but we suggest to download it."
        },
        {
            question: "Your Payment is Safe and Secured?",
            answer: "Yes, We have trusted payment gateway, your payment is safe and secured with end-to-end encryption."
        },
        {
            question: "Which Payment Mode Accept?",
            answer: "We accept UPI, Google Pay, PhonePe, Paytm, Credit Card, Debit Card and Net banking, with secure payment gateway."
        },
        {
            question: "100% SATISFACTION or FULL MONEY BACK",
            answer: "I want to offer a 100% money-back guarantee to those who have purchased my digital product, with the condition that if they encounter any issues with the product such as quality problems, download issues, or if they are unable to use it."
        }
    ];

    const [answerVisibility, setAnswerVisibility] = useState(Array(faqs.length).fill(false));

    const toggleAnswer = (index) => {
        setAnswerVisibility(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <section className="">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pb-10">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Explore Common Questions
                    </h2>
                </div>
                <div className="max-w-5xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((faq, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button type="button" onClick={() => toggleAnswer(index)} className="flex items-center justify-between w-full px-2 py-5 sm:p-6">
                                <span className="flex text-[18px] font-bold">{faq.question}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${answerVisibility[index] ? 'transform rotate-90' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <div style={{ display: answerVisibility[index] ? 'block' : 'none' }} className="px-4 pb-5 sm:px-6 font-semibold sm:pb-6">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
