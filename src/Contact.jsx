import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaFileDownload 
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="Contact" className="py-16 bg-purple-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2 inline-block">
          Contact
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Feel free to reach out through any of the following.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
            <FaEnvelope className="text-3xl mb-2 text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:teofanovdjordje03@gmail.com"
              className="text-purple-300 hover:underline"
            >
              teofanovdjordje03@gmail.com
            </a>
          </div>

          
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
            <FaPhone className="text-3xl mb-2 text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+381601412289"
              className="text-purple-300 hover:underline"
            >
              +381 60 141 22 89
            </a>
          </div>

          
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
            <FaLinkedin className="text-3xl mb-2 text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/djordje-teofanov-4b93082b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:underline"
            >
              linkedin.com/in/djordje-teofanov-4b93082b3
            </a>
          </div>

         
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
            <FaGithub className="text-3xl mb-2 text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/teofanov03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:underline"
            >
              github.com/teofanov03
            </a>
          </div>

         
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl mb-2 text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-purple-300">Novi Sad, Serbia</p>
          </div>

          
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
            <FaFileDownload className="text-3xl mb-2 text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">Download CV</h3>
            <a
              href="/CV_Djordje_Teofanov.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:underline"
            >
              Get CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
