// // import React from "react";
// import "./popup.css";

// const Popup = ({ show, onClose, children }) => {
//   if (!show) return null;

//   return (
//     <div className="popup-overlay" onClick={onClose}>
//       <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//         {children}
//         <h2>Description</h2>
//         <p>
//           Essential Cell Biology provides a readily accessible introduction to
//           the central concepts of cell biology, and its lively, clear writing
//           and exceptional illustrations make it the ideal textbook for a first
//           course in both cell and molecular biology. The text and figures are
//           easy-to-follow, accurate, clear, and engaging for the introductory
//           student. Molecular detail has been kept to a minimum in order to
//           provide the reader with a cohesive conceptual framework for the basic
//           science that underlies our current
//         </p>
//         <button className="popup-btn" onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Popup;
