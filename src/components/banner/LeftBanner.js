import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      'FullStack Engineer.',
      'Mobile App Developer.',
      'Frontend Specialist.',
      'System Architect.',
      'UI/UX Enthusiast.',
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  /**
   * HANDLER: Download PDF
   * Captures the 'root' element (entire app) and converts to PDF.
   */
  const handleDownloadCV = async () => {
    const element = document.getElementById('root'); // Targets your entire app
    const downloadBtn = document.getElementById('download-btn');

    // 1. Visual feedback & cleanup for PDF
    if (downloadBtn) downloadBtn.innerText = "Generating...";

    try {
      const canvas = await html2canvas(element, {
        scale: 2, // High resolution
        useCORS: true,
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add pages as needed for long content
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Umar_Ibrahim_Ayobami_CV.pdf");
    } catch (error) {
      console.error("PDF Export Error:", error);
    } finally {
      if (downloadBtn) downloadBtn.innerText = "Download CV";
    }
  };

  // Inside the return of LeftBanner.js
  return (
    <div className="flex flex-col w-full lgl:w-1/2 gap-12">
      <div className="flex flex-col gap-6">
        <h4 className="text-sm font-bold tracking-[4px] text-gray-300 uppercase">
          Welcome to my digital space
        </h4>
        <h1 className="text-5xl lgl:text-6xl font-black text-white leading-tight">
          Hi, I'm{' '}
          <span className="text-sky-400 capitalize text-white">WAHEED Basiru.</span>
        </h1>
        <div className="h-16">
          <h2 className="text-3xl lgl:text-4xl font-bold text-white">
            A <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#38bdf8" />
          </h2>
        </div>
        <p className="flex text-base text-justify lgl:text-sm leading-8 text-gray-300 max-w-[650px] font-bodyFont md:text-left">
        Motivated Computer Scientist with strong foundation in Software Development, Algorithms
         and Data Structures. Passionate about building efficient, Scalable solution and exploring
          emerging technologies in AI and Distributed Systems. Seeking opportunities to contribute 
          technical skills and continue learning in a challenging environment .
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 sm:items-center">
        <Media />
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-bold text-white">Quick Action</h2>
          <button
            id="download-btn"
            onClick={handleDownloadCV}
            className="px-8 py-4 bg-white text-[#191970] font-bold rounded-xl shadow-xl hover:bg-gray-200 hover:-translate-y-1 transition-all duration-300"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;