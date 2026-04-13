// import React from 'react';

// const UmarEngineerLogo = ({ isScrolled }) => {
//   return (
//     <div className="flex items-center gap-2 group transition-all duration-300">
//       {/* Mini Icon - Reduced height significantly */}
//       <div className={`relative transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}>
//         <svg
//           width="40"
//           height="40"
//           viewBox="0 0 100 100"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="drop-shadow-sm"
//         >
//           {/* Engineering Brackets */}
//           <path d="M25 40L15 50L25 60" stroke="#0F172A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
//           <path d="M75 40L85 50L75 60" stroke="#0F172A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          
//           {/* Modernized Center 'I' Bar */}
//           <rect x="44" y="25" width="12" height="50" rx="6" fill="#0F172A" />
//           {/* Accent Dot - Engineering Blue */}
//           <circle cx="50" cy="50" r="6" fill="#0EA5E9" className="animate-pulse" />
//         </svg>
//       </div>

//       {/* Text Identity - Horizontal Layout to save vertical space */}
//       <div className="flex flex-col justify-center">
//         <div className="flex items-center gap-1.5">
//           <h1 className={`font-black tracking-tighter text-slate-900 leading-none transition-all duration-300 ${
//             isScrolled ? "text-base" : "text-lg"
//           }`}>
//             UMAR <span className="text-sky-600">IBRAHIM</span>
//           </h1>
//           {/* Tiny divider visible only when expanded */}
//           {!isScrolled && <span className="h-3 w-[1px] bg-slate-300 hidden sm:block"></span>}
          
//           <p className={`hidden sm:block font-extrabold uppercase tracking-widest text-slate-500 transition-all duration-300 ${
//             isScrolled ? "text-[9px]" : "text-[10px]"
//           }`}>
//             Software Engineer
//           </p>
//         </div>
        
//         {/* Mobile-only subtitle (shows only when not scrolled) */}
//         {!isScrolled && (
//           <p className="sm:hidden font-extrabold uppercase tracking-widest text-slate-500 text-[8px] mt-0.5">
//             Software Engineer
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UmarEngineerLogo;


import React from 'react';

const UmarEngineerLogo = ({ isScrolled }) => {

return (
    <div className={`group cursor-pointer transition-all duration-300 ${isScrolled ? "scale-95" : "scale-110"}`}>
      <svg
        width="64"  /* Increased from 50 */
        height="64" /* Increased from 50 */
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Outer Programming Brackets */}
        <path 
          d="M20 30L8 50L20 70" 
          stroke="#475569" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:stroke-blue-600 transition-colors duration-300"
        />
        <path 
          d="M80 30L92 50L80 70" 
          stroke="#475569" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:stroke-blue-600 transition-colors duration-300"
        />

        {/* Central 'A' (Ayobami) - Top Peak */}
        <path 
          d="M50 12L30 46H70L50 12Z" 
          fill="#191970" 
          className="group-hover:fill-blue-800 transition-colors duration-300"
        />
        
        {/* Central 'I' (Ibrahim) - Thicker Pillar */}
        <rect 
          x="45" 
          y="32" 
          width="10" 
          height="38" 
          rx="5" 
          fill="#3b82f6" 
        />

        {/* Base 'U' (Umar) - Thicker Foundation */}
        <path 
          d="M30 52V72C30 83.0457 38.9543 92 50 92C61.0457 92 70 83.0457 70 72V52" 
          stroke="#191970" 
          strokeWidth="12" 
          strokeLinecap="round" 
          className="group-hover:stroke-blue-800 transition-colors duration-300"
        />

        {/* Programming Core Dot */}
        <circle cx="50" cy="50" r="5" fill="white" />
      </svg>
    </div>
  );
};

export default UmarEngineerLogo;