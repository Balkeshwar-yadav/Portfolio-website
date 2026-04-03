export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Balkeshwar Yadav</span> 👋
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
            Full Stack Developer
          </h2>

          <p className="mt-6 text-gray-400 max-w-lg">
            I build modern, responsive web applications using React, Node.js,
            and cutting-edge technologies. Passionate about creating beautiful
            and performant user experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
            >
              View Projects
            </a>

            <a
              href="/images/Resume.pdf" // path to your PDF
              download="My_Resume.pdf" // optional: file name for download
              target="_blank" // opens PDF in new tab
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg font-medium transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            {/* Profile Image */}
            <img
              src="/images/profile.png"
              alt="profile"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-gray-700 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
