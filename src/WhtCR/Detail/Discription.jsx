import React from 'react';
import { useLocation } from 'react-router-dom';

const Description = () => {
    const location = useLocation();
    const selectedCard = location.state.selectedCard;

    const descriptions = [
        {
            title: "Versatility",
            description: "These software tools offer a wide range of mockup templates for different products, including boxes, books, CDs, apparel, digital screens, and more.",
        },
        {
            title: "Customization",
            description: "Users can customize mockups by adding their own designs, text, images, and branding elements to create a unique visual representation of their product or idea.",
        },
        {
            title: "Realistic Rendering",
            description: "High-quality rendering capabilities ensure that mockups look realistic, helping users visualize how their final product will appear in the real world.",
        },
        {
            title: "Ease of Use",
            description: "Intuitive interfaces and user-friendly features make it easy for individuals with varying levels of design experience to create professional-looking mockups.",
        },
        {
            title: "Time and Cost Efficiency",
            description: "By using mockup making software, users can save time and resources that would otherwise be spent on physical prototyping or hiring designers for mockup creation.",
        },
        {
            title: "Collaboration",
            description: "Some software platforms allow for collaboration, enabling teams to work together on mockup designs, share feedback, and iterate quickly.",
        },
        {
            title: "Mockup Libraries",
            description: "Access to extensive libraries of pre-designed mockups for different industries and products further streamlines the design process.",
        }
    ];

    return (
        <div className=" flex flex-col justify-between max-lg:px-8 mt-3">
            <p className="lg:mb-12 max-lg:mb-5 text-4xl text-gray-500 font-bold text-center max-lg:text-2xl">
                {selectedCard.Name}
            </p>
            <div className="flex flex-wrap">
                {descriptions.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/3 max-lg:w-full lg:px-8 mb-10">
                        <div className="relative h-full ml-0 mr-0 w-full">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-300 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-gray-300 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-1 ml-3 text-lg font-bold text-gray-800">{item.title}</h3>
                                </div>
                                <p className="mt-1 mb-1 text-xs font-medium text-gray-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Description;
