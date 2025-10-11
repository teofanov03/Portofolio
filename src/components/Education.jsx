import SplitText from "./SplitText";
import  DecryptedText  from "./DecryptedText";
import { GraduationCap, School } from "lucide-react";



function Education() {
  return (
    <div
      id="Education"
      className="bg-purple-900  bg-opacity-80 border border-gray-600 shadow-lg 
                 rounded-2xl max-w-5xl mx-auto mt-60 mb-10 p-8 scroll-mt-24
                 transition-transform transform hover:scale-105 duration-300 "
    >
      <h2 className="text-center font-extrabold text-5xl text-white mb-8">
        <SplitText
          text="Education"
          className="text-5xl font-extrabold text-white text-center"
          delay={80}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </h2>

      
      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
               <School className="text-purple-300 w-8 h-8" />
          <DecryptedText
            text="TEHNIČKA ŠKOLA “Mileva Marić Ajnštajn” Novi Sad"
            speed={90}
            sequential="true"
            maxIterations={30}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            animateOn="view"
            />
        </h3>
        <p className="text-lg md:text-xl font-medium text-gray-300 mt-2">
          Printing Technician <span className="text-purple-300">| 2018 – 2022</span>
        </p>
      </div>

      
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          <GraduationCap className="text-purple-300 w-8 h-8" />
        <DecryptedText
            text="VISOKA TEHNIČKA ŠKOLA STRUKOVNIH STUDIJA Novi Sad"
            speed={90}
            sequential="true"
            maxIterations={30}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            animateOn="view"
            />
        </h3>
        <p className="text-lg md:text-xl font-medium text-gray-300 mt-2">
          Bachelor’s Degree in Information Technology{" "}
          <span className="text-purple-300">| 2022 – 2025</span>
        </p>
      </div>
    </div>
  );
}

export default Education;
