import Cards from "./Cards"
import aspnetlogo from "./assets/Images/web.png"
import aspnetproject from "./assets/Images/aspnetproject.png"
import phplogo from "./assets/Images/php.png"
import phpproject from "./assets/Images/quiz.png";
import jslogo from "./assets/Images/js.png";
import weatherAppImg from "./assets/Images/weatherapp.png";
import expenseTrackerImg from "./assets/Images/expense-tracker.png";
import memoryGameImg from "./assets/Images/memory-game.png";

function Projects(){
    return(
 <div id='Projects' className=" scroll-mt-24 mt-4 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-10 px-5">
      <h1 className="text-center text-5xl font-extrabold text-white mb-12">
        My Projects
      </h1>

     
      
      
      <section id="aspnet" className="mb-16 scroll-mt-36">
        <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2 flex items-center gap-3">
        <img src={aspnetlogo} alt="" className=" w-8 h-8" />  ASP.NET Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Cards
            image={aspnetproject}
            projectName="Blog, To Do List and Shop"
            programClass="aspnet"
            programName="ASP.NET MVC & Core"
            link="http://www.portofolioproject.somee.com"
            githubLink = "https://github.com/teofanov03/MyASP.NETProject"
          />
          
        </div>
      </section>
    <section id="php" className="mb-16 scroll-mt-36">
  <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2 flex items-center gap-3">
    <img src={phplogo} alt="" className="w-8 h-8" /> PHP Projects
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <Cards
      image={phpproject} 
      projectName="Online Quiz Application"
      programClass="php"
      programName="PHP & MySQL(Read the README on github to use admin side)"
      link="https://www.online-quiz.ct.ws/" 
      githubLink="https://github.com/teofanov03/online_quiz_PHP" 
    />
  </div>
</section>
<section id="javascript" className="mb-16 scroll-mt-36">
  <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2 flex items-center gap-3">
    <img src={jslogo} alt="" className="w-8 h-8" /> JavaScript Projects
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <Cards
      image={expenseTrackerImg} 
      projectName="Expense Tracker"
      programClass="javascript"
      programName="JavaScript (LocalStorage, Table CRUD)"
      link="https://teofanov03.github.io/JS_Expense_Tracker/"
      githubLink="https://github.com/teofanov03/JS_Expense_Tracker"
    />
    <Cards
      image={weatherAppImg} 
      projectName="Weather App"
      programClass="javascript"
      programName="JavaScript (API integration, Async/Await)"
      link="https://teofanov03.github.io/JS_Weather_App/"
      githubLink="https://github.com/teofanov03/JS_Weather_App"
    />
    <Cards
      image={memoryGameImg} 
      projectName="Memory Game"
      programClass="javascript"
      programName="JavaScript (DOM manipulation, Game Logic)"
      link="https://teofanov03.github.io/JS_Memory_Game/"
      githubLink="https://github.com/teofanov03/JS_Memory_Game"
    />
  </div>
</section>


      </div>
    
    )
}

export default Projects