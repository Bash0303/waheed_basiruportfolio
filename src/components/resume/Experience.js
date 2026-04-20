import React from "react";
import { motion } from "framer-motion";
import ResumeCard2 from "./ResumeCard2";
import ResumeCard3 from "./ResumeCard3";
import ResumeCard5 from "./ResumeCard5";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-16 py-16 px-4 md:px-10 font-titleFont md:flex-row bg-gray-50 rounded-2xl"
    >
      <div className="w-full md:w-2/3">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-950 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-lg">Detailed history of my roles and responsibilities.</p>
        </div>
        
        <div className="w-full h-auto border-l-4 border-slate-200 flex flex-col gap-8 pl-6 md:pl-8">
          
          {/* Bulq - Frontend Engineer */}
          <ResumeCard5
            title="Frontend Engineer"
            subTitle="AjoSave Fintech App"
            result="2025 – 2026"
            des="Collaborated on building scalable frontend architectures using modern JavaScript frameworks to enhance user interaction."
            des2="Optimized web performance and ensured cross-browser compatibility for a diverse user base."
          />

          {/* Aboki Xchange - Frontend Engineer */}
          <ResumeCard5
            title="Full-Stack Engineer"
            subTitle="CODSTAKE PREDICTION PLATFORM"
            result="2024 – 2026"
            des="A platform for Predicting COD game, place bet with integration of Paystack and Flutter Wave. Handle both Frontend and Backend built with ReactJS, TailwindCSS, NodeJS/Expess and MongoDB."
            des2="Developed RESTful APIs using Node.js and Express.js to handle business logic."
            des3="Designed and managed MongoDB databases, including schema design and data validation."
            des4="Integrated frontend and backend systems, managing data flow and state using modern JS practices."          />

          {/* Code Circle - Frontend Engineer */}
          <ResumeCard5
            title="Full Stack Engineer | Program Lead"
            subTitle="Code Circle | Ilorin, Kwara State, Nigeria"
            result="February 2026 till Date"
            des="-"
          />

          {/* Urello - Frontend Engineer */}
          <ResumeCard5
            title="Full-Stack Engineer"
            subTitle="CodeCircle Tech Hub Scholarship Portal"
            result="Dec. 2025 – FEB 2026"
            des2="Developed RESTful APIs using Node.js and Express.js to handle business logic."
            des3="Designed and managed MongoDB databases, including schema design and data validation."
            des4="Integrated frontend and backend systems, managing data flow and state using modern JS practices."
          />


          {/* SkoolRight - Frontend Engineer */}
          <ResumeCard5
            title="FullStack Engineer "
            subTitle="Ajayi Crowther University Staff Portal"
            result="January-2025-December-2025"
            des="Developed responsive and interactive user interfaces using React, TailwindCSS & JavaScript."
            des2="Developed RESTful APIs using Node.js and Express.js to handle business logic."
            des3="Designed and managed MongoDB databases, including schema design and data validation."
            des4="Integrated frontend and backend systems, managing data flow and state using modern JS practices."


          />

          {/* Wumbis Concept - Full Stack Engineer */}
          <ResumeCard2
            title="Full Stack Engineer"
            subTitle="Crescent Computer Consult"
            result="Oct 2024 – Mar. 2025"
            des="Built and maintained responsive user interfaces using React.js and Tailwind CSS."
            des2="Developed RESTful APIs using Node.js and Express.js to handle business logic."
            des3="Designed and managed MongoDB databases, including schema design and data validation."
            des4="Integrated frontend and backend systems, managing data flow and state using modern JS practices."
            des5="Implemented authentication and authorization features to secure user data."
            des6="Collaborated with cross-functional teams to deliver scalable web applications."
          />

                 </div>
      </div>

      <div className="w-full md:w-1/3">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-950 tracking-tight">
            Internships/ NYSC 
          </h2>
        </div>
        <div className="w-full h-auto border-l-4 border-slate-200 flex flex-col gap-8 pl-6 md:pl-8">
          <ResumeCard3
            title="COMPUTER OPERATOR (NYSC)"
            subTitle="AJAYI CROWTHER UNIVERSITY(ACU)."
            result="Jan. 2025 - Dec. 2025"
            des="Preparing Office Document and help in Typist and sending email out"
          />
          <ResumeCard3
            title="BULK TELLER (IT)"
            subTitle="FIRST CITY MONUMENT BANK (FCMB)."
            result="February 2022 - Dec. 2022"
            des="Managing Money"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;