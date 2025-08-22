

function Home(){
    return(
        
      <div
  id="Home"
  className=" scroll-mt-25 max-w-3xl mx-auto mt-10 p-8 rounded-lg bg-purple-900 bg-opacity-80 border border-gray-600 shadow-lg  transition-transform transform hover:scale-105 duration-300"
>
  <h1 className="text-4xl font-extrabold text-white mb-4">
    Hi, I am Đorđe Teofanov
  </h1>
  <p className="text-gray-200 text-lg leading-relaxed">
    I am a passionate programmer experienced in multiple programming languages and technologies. Skilled in ASP.NET MVC and Core, as well as C, C++, C#, React, Java, and PHP. I enjoy developing efficient and scalable applications that solve real-world problems. Constantly learning new technologies and striving to become a better software engineer. My projects showcase dedication and expertise in building modern web and desktop solutions.
    My interests are football and gaming.
  </p>
   <a
    href="#Projects"
    className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded shadow-md
               transition-colors duration-300"
  >Projects</a>
</div>
    )
}
export default Home