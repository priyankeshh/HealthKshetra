// import React, { useState } from 'react';

// function SolarPanelSubsidy() {
//   // State variables for selected panel capacity and calculated subsidy
//   const [panelCapacity, setPanelCapacity] = useState(0);
//   const [subsidy, setSubsidy] = useState(0);

//   // Function to handle subsidy calculation
//   const calculateSubsidy = () => {
//     let calculatedSubsidy = 0;
//     if (panelCapacity < 3) {
//       calculatedSubsidy = panelCapacity * 14588;
//     } else if (panelCapacity >= 3 && panelCapacity <= 10) {
//       calculatedSubsidy = 14588 * 3 + (panelCapacity - 3) * 7294;
//     } else {
//       calculatedSubsidy = 94822;
//     }
//     setSubsidy(calculatedSubsidy);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-3xl font-semibold mb-4">Solar Panel Subsidy Calculator</h1>

//       {/* Panel capacity input field */}
//       <div className="mb-4">
//         <label htmlFor="panelCapacity" className="mr-2">
//           Panel Capacity (kW):
//         </label>
//         <input
//           type="number"
//           id="panelCapacity"
//           value={panelCapacity}
//           onChange={(e) => setPanelCapacity(parseFloat(e.target.value))}
//           className="border border-gray-300 rounded px-4 py-2"
//         />
//       </div>

//       {/* Calculate button */}
//       <button
//         className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
//         onClick={calculateSubsidy}
//         disabled={!panelCapacity} // Disable button if panel capacity is not entered
//       >
//         Calculate Subsidy
//       </button>

//       {/* Display calculated subsidy */}
//       {subsidy !== 0 && (
//         <div className="mt-8">
//           <h2 className="text-lg font-semibold">Subsidy: {subsidy.toFixed(2)} INR</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SolarPanelSubsidy;