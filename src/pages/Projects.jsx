const projects = [
  {
    title: "Recipe App",
    description: "Fullstack app with cart & Authentication integration",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    github: "https://github.com/Balkeshwar-yadav/Recipe-Application.git",
    live: "https://recepy-frontend.vercel.app/",
    image: "/images/recipe.png",
  },
  {
    title: "Food Ordering Application",
    description: "Food Ordering Application built using Mern Stack Technology",
    tech: ["ReactJs","Tailwind CSS","Node.js", "Express.js", "MongoDB"],
    github: " https://github.com/Balkeshwar-yadav/Food-Ordering-App.git",
    live: " https://food-ordering-app-iota-lovat.vercel.app/",
    image: "/images/fordering.png",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with modern UI",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Balkeshwar-yadav/Portfolio-website.git",
    live: "https://portfolio-website-eight-gamma-82.vercel.app/",
    image: "/images/portfolio.png",
  },
  {
    title: "File Uploader Application",
    description: "Real-time file uploader using multer and cloudinary",
    tech: ["Nodejs","Express","MongoDB","Multer", "Cloudinary"],
    github: "https://github.com/Balkeshwar-yadav/NodeJs-file-uploader.git",
    live: "https://nodejs-file-uploader-qwdz.onrender.com/",
    image: "/images/imgUploader.png",
  },
  {
    title: "Todo Application",
    description: "Mern Todo Application with CRUD operation built with modern UI",
    tech: ["MongoDB","React","ExpressJs", "NodeJs", "Tailwind CSS"],
    github: "https://github.com/Balkeshwar-yadav/MERN-Todo--Application.git",
    live: "https://vercel-frontend-pwou.vercel.app/",
    image: "/images/demo.png",
  },
  {
    title: "URL Shortener Application",
    description: "URL Shortener Application using Nodejs and built with modern UI",
    tech: ["MongoDB","ExpressJs", "NodeJs", "Tailwind CSS"],
    github: "https://github.com/Balkeshwar-yadav/URL-Shortener.git",
    live: "https://url-shortener-emjh.onrender.com/",
    image: "/images/url.png",
  },
  {
    title: "Voice Assistant Application",
    description: "ReactJs Voice Assistant Application built with using different APIs like google, wikipedia with modern UI",
    tech: ["React", "APIs", "Tailwind CSS"],
    github: "https://github.com/Balkeshwar-yadav/Voice-Assistant-Expert.git",
    live: "https://voice-assistant-expert.vercel.app/",
    image: "/images/voice.png",
  },
  {
    title: "Quiz Application",
    description: "Quiz Application built with modern UI",
    tech: ["MongoDB","React","ExpressJs", "NodeJs", "Tailwind CSS"],
    github: "https://github.com/Balkeshwar-yadav/React-Quiz-App.git",
    live: "https://voice-assistant-expert-7xds.vercel.app/",
    image: "/images/quiz.png",
  },
  {
    title: "Weather Application",
    description: "Weather Application providing accurate and real-time weather-information",
    tech: ["JavaScript", "HTML", "Tailwind CSS"],
    github: "https://github.com/Balkeshwar-yadav/Weather-API.git",
    live: "https://color-palette-application-enbz.vercel.app/",
    image: "/images/weather.png",
  },
  {
    title: "Shopping-Page",
    description: "Shopping-Page built with using ReactJs",
    tech: ["ReactJs", "Tailwind CSS"],
    github: "https://github.com/Balkeshwar-yadav/React-Basic-UI-page.git",
    live: "https://react-basic-ui-page-ruby.vercel.app/",
    image: "/images/shopping.png",
  },
  {
    title: "Food Delivery Application",
    description: "Food Delivery Application built with  using ReactJs",
    tech: ["ReactJs", "Tailwind CSS"],
    github: "https://github.com/Balkeshwar-yadav/Food-Delivery-App.git",
    live: "https://food-delivery-app-rosy-phi.vercel.app/",
    image: "/images/foodDelivery.png",
  },
  {
    title: "Chocolate-Website-Design Application",
    description: "Chocolate-Website providing online and offline delicious chocolate",
    tech: ["ReactJs", "HTML", "CSS"],
    github: "https://github.com/Balkeshwar-yadav/Website-Design.git",
    live: "https://food-delivery-app-ie7y.vercel.app/",
    image: "/images/somoorish.png",
  },
  {
    title: "Calculator Application",
    description: "Calculator Application providing accurate and real-time calculation",
    tech: ["JavaScript", "HTML", "CSS"],
    github: " https://github.com/Balkeshwar-yadav/Calculator.git",
    live: " https://calculator-gilt-seven-28.vercel.app/",
    image: "/images/calculator.png",
  },
  {
    title: "Product-API Application",
    description: "Product-API Application built with CRUD operation ",
    tech: ["React", "Node.js", "Express.js", "MongoDB","Tailwind CSS"],
    github: "https://github.com/Balkeshwar-yadav/Products-API.git",
    live: " https://products-api-ecru.vercel.app/",
    image: "/images/product.png",
  },
  {
    title: "Color-Generator-Application",
    description: "Color-Generator Application provide different color combination code ",
    tech: ["React", " CSS"],
    github: "https://github.com/Balkeshwar-yadav/Color-Palette-Application.git",
    live: " https://color-palette-application-kappa.vercel.app/",
    image: "/images/color.png",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              {/* Title */}
              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 mt-2 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-green-400 hover:underline"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}