import TextType from './TextType';
import LogoLoop from './LogoLoop';

const imageLogos = [
   { node: <img src="/Portofolio/logos/react.png" alt="React" className="h-12" /> },
  { node: <img src="/Portofolio/logos/javascript.png" alt="JavaScript" className="h-12" /> },
  { node: <img src="/Portofolio/logos/tailwindcss.png" alt="Tailwind CSS" className="h-12" /> },
  { node: <img src="/Portofolio/logos/dotnet.png" alt="C#/.NET" className="h-12" /> },
  { node: <img src="/Portofolio/logos/php.png" alt="PHP" className="h-12" /> },
  { node: <img src="/Portofolio/logos/github.png" alt="GitHub" className="h-12" /> },
  { node: <img src="/Portofolio/logos/sql.png" alt="SQL" className="h-12" /> },
];

function Home() {
  return (
    
    <div
      id="Home"
      className="scroll-mt-25  max-w-4xl mx-auto mt-10 p-8 rounded-lg bg-purple-900 bg-opacity-80 border border-gray-600 shadow-lg transition-transform transform hover:scale-105 duration-300"
    >
      
      <h1 className="text-4xl font-extrabold text-white mb-4 text-center">
       <TextType 
        text={["Hi, I am Đorđe Teofanov"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
      </h1>
     
      
      <p className="text-gray-200 text-lg leading-relaxed mt-4">
      <TextType 
        text={["I am a passionate programmer with experience in modern web development technologies. Skilled in ASP.NET MVC, C#, React, PHP, SQL, HTML, CSS, JavaScript, and Tailwind CSS,I enjoy creating efficient and scalable applications that deliver real-world value. I am constantly learning and improving my skills, with a strong interest in both frontend and backend development. My projects showcase dedication and expertise in building responsive, user-friendly, and reliable web solutions. Outside of programming, I enjoy football and gaming, which help me stay creative and balanced. "]}
        typingSpeed={30}
        pauseDuration={2000}
        showCursor={true}
        cursorCharacter="|"
      />
      </p>
      
      <div className="mt-6 h-24 relative overflow-hidden">
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={48}
          gap={30}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="transparent"
          ariaLabel="Technology logos"
        />
      </div>

    
      <a
        href="#Projects"
        className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded shadow-md transition-colors duration-300 transform hover:scale-105 mt-6"
      >
        Projects
      </a>
    
    </div>
  
  );
}

export default Home;
