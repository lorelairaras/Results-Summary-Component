const ResultsSummary = {
  totalScore: 76,
  percentile: 65,

  init() {
    this.loadData();
  },

  async loadData() {
    try {
      const response = await fetch("./data.json");
      const data = await response.json();
      console.log("Data loaded:", data);
      this.render(data);
    } catch (error) {
      console.error("Error loading data:", error);
      // Fallback data
      const fallbackData = [
        { category: "Reaction", score: 80, icon: "./assets/images/icon-reaction.svg" },
        { category: "Memory", score: 92, icon: "./assets/images/icon-memory.svg" },
        { category: "Verbal", score: 61, icon: "./assets/images/icon-verbal.svg" },
        { category: "Visual", score: 73, icon: "./assets/images/icon-visual.svg" },
      ];
      this.render(fallbackData);
    }
  },

  getCategoryStyles(category) {
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
  },

  render(data) {
    const root = document.getElementById("root");

    root.innerHTML = `
      <div class="min-h-screen bg-white font-hanken md:flex md:items-center md:justify-center md:bg-pale-blue">
        <div class="md:flex md:max-w-2xl md:rounded-3xl md:shadow-xl md:bg-white">
          <!-- Result Section -->
          <div class="bg-gradient-to-b from-light-slate-blue to-light-royal-blue text-white text-center py-6 px-12 rounded-b-3xl md:rounded-3xl md:flex-1 md:py-10">
            <h2 class="text-lg text-light-lavender mb-6 md:text-xl">Your Result</h2>
            <div class="w-36 h-36 bg-gradient-to-b from-violet-blue to-persian-blue rounded-full mx-auto mb-6 flex items-center justify-center md:w-44 md:h-44">
              <div>
                <div class="text-5xl font-bold md:text-6xl">${this.totalScore}</div>
                <div class="text-light-lavender opacity-70">of 100</div>
              </div>
            </div>
            <div class="text-2xl font-bold mb-2 md:text-3xl">Great</div>
            <p class="text-light-lavender mb-2 max-w-xs mx-auto md:text-lg">
              You scored higher than ${this.percentile}% of the people who have taken these tests.
            </p>
          </div>

          <!-- Summary Section -->
          <div class="p-8 md:flex-1 md:p-10">
            <h3 class="text-lg font-bold text-dark-gray-blue mb-6 md:text-xl">Summary</h3>
            <div class="space-y-4 mb-6">
              ${data
                .map(
                  (item) => `
                <div class="flex items-center justify-between p-4 rounded-xl ${this.getCategoryStyles(item.category)}">
                  <div class="flex items-center">
                    <img src="${item.icon}" alt="${item.category}" class="w-5 h-5 mr-3" />
                    <span class="font-medium">${item.category}</span>
                  </div>
                  <div class="text-dark-gray-blue font-bold">
                    ${item.score} <span class="text-dark-gray-blue opacity-50">/ 100</span>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
            <button class="w-full bg-dark-gray-blue text-white py-4 rounded-full font-bold hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue transition-colors md:text-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
    `;

    this.addButtonListener();
  },

  addButtonListener() {
    const button = document.querySelector("button");
    if (button) {
      button.addEventListener("click", () => {
        alert("Continue button clicked!");
      });
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  ResultsSummary.init();
});
