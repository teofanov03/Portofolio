function Cards({ image, projectName, programClass, programName, link, githubLink }) {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${programClass} transition-transform transform hover:scale-105`}
    >
      <img className="w-full" src={image} alt={projectName} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{projectName}</h2>
        <p className="text-base">{programName}</p>
      </div>
      <div className="px-6 py-4 flex gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${programClass}-btn font-bold py-2 px-4 rounded `}
          >
            View Project
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn font-bold py-2 px-4 rounded bg-gray-700 text-white hover:bg-gray-800`}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default Cards;
