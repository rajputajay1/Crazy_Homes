import React, { useState } from 'react';

const FAQSection = () => {
    const reasons = [
        "When will I receive my product?",
        "What if I don't receive my product after purchase?",
        "What if I lose my product?",
        "How long can I access the material?",
        "Your Payment is Safe and Secured?",
        "Which Payment Mode Accept?",
        "100% SATISFACTION or FULL MONEY BACK",
    ];

    // State to manage the visibility of answers and arrow rotation
    const [answerVisibility, setAnswerVisibility] = useState(Array(reasons.length).fill(false));

    // Function to toggle answer visibility and arrow rotation
    const toggleAnswer = (index) => {
        setAnswerVisibility(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Explore Common Questions
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {reasons.map((reason, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button type="button" onClick={() => toggleAnswer(index)} className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                <span className="flex text-lg font-semibold text-black">{`Question ${index + 1}`}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className={`w-6 h-6 text-gray-400 ${answerVisibility[index] ? 'transform rotate-0' : 'transform rotate-180'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div style={{ display: answerVisibility[index] ? 'block' : 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>{reason}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-600 text-base mt-9">
                    Still have questions?
                    <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact
                        our support
                    </span>
                </p>
            </div>
        </section>
    );
};

export default FAQSection;
