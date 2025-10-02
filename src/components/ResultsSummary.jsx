import React from "react";
import data from "../data.json";

const ResultsSummary = () => {
  const totalScore = 76;
  const percentile = 65;

  console.log("Data loaded:", data);

  const getCategoryStyles = (category) => {
    switch (category) {
      case "Reaction":
        return "bg-red-50 text-red-600";
      case "Memory":
        return "bg-yellow-50 text-yellow-600";
      case "Verbal":
        return "bg-green-50 text-green-600";
      case "Visual":
        return "bg-blue-50 text-blue-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-white font-hanken md:flex md:items-center md:justify-center md:bg-pale-blue">
      <div className="md:flex md:max-w-2xl md:rounded-3xl md:shadow-xl md:bg-white">
        {/* Result Section */}
        <div className="bg-gradient-to-b from-light-slate-blue to-light-royal-blue text-white text-center py-6 px-12 rounded-b-3xl md:rounded-3xl md:flex-1 md:py-10">
          <h2 className="text-lg text-light-lavender mb-6 md:text-xl">Your Result</h2>
          <div className="w-36 h-36 bg-gradient-to-b from-violet-blue to-persian-blue rounded-full mx-auto mb-6 flex items-center justify-center md:w-44 md:h-44">
            <div>
              <div className="text-5xl font-bold md:text-6xl">{totalScore}</div>
              <div className="text-light-lavender opacity-70">of 100</div>
            </div>
          </div>
          <div className="text-2xl font-bold mb-2 md:text-3xl">Great</div>
          <p className="text-light-lavender mb-2 max-w-xs mx-auto md:text-lg">
            You scored higher than {percentile}% of the people who have taken these tests.
          </p>
        </div>

        {/* Summary Section */}
        <div className="p-8 md:flex-1 md:p-10">
          <h3 className="text-lg font-bold text-dark-gray-blue mb-6 md:text-xl">Summary</h3>
          <div className="space-y-4 mb-6">
            {data.map((item, index) => (
              <div key={index} className={`flex items-center justify-between p-4 rounded-xl ${getCategoryStyles(item.category)}`}>
                <div className="flex items-center">
                  <img src={item.icon} alt="" className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.category}</span>
                </div>
                <div className="text-dark-gray-blue font-bold">
                  {item.score} <span className="text-dark-gray-blue opacity-50">/ 100</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full bg-dark-gray-blue text-white py-4 rounded-full font-bold hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue transition-colors md:text-lg">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
