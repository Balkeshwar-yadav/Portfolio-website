import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-gray-200/80 backdrop-blur z-50 p-4 flex justify-between">
      <h1 className="font-bold text-lg">MyPortfolio</h1>
      <div className="space-x-6">
        <Link to='/' className="hover:text-blue-600">Home</Link>
        <Link to='/projects' className="hover:text-blue-600">Projects</Link>
        <Link to='/contact' className="hover:text-blue-600">Contact</Link>
        
        {/* <a href="projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a> */}

      </div>
    </nav>
  );
}