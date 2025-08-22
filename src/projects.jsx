import Cards from "./Cards"

function Projects(){
    return(
 <div id='Projects' className=" scroll-mt-24 mt-4 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-10 px-5">
      <h1 className="text-center text-5xl font-extrabold text-white mb-12">
        My Projects
      </h1>

     
      
      
      <section id="aspnet" className="mb-16 scroll-mt-36">
        <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2 flex items-center gap-3">
        <img src="/web.png" alt="" className=" w-8 h-8" />  ASP.NET Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Cards
            image={"/dio.jpg"}
            projectName="To Do List"
            programClass="aspnet"
            programName="ASP.NET MVC & Core"
            link="listfortasks.somee.com"
          />
          <Cards
            image={"/dio.jpg"}
            projectName="Moj ASP.NET Projekat"
            programClass="aspnet"
            programName="ASP.NET MVC & Core"
            link="https://example.com"
          />
          <Cards
            image={"/dio.jpg"}
            projectName="Moj ASP.NET Projekat"
            programClass="aspnet"
            programName="ASP.NET MVC & Core"
            link="https://example.com"
          />
        </div>
      </section>
    
      </div>
    
    )
}

export default Projects