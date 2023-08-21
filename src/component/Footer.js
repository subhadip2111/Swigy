const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white py-4 text-center">
      Created By{" "}
      <i className="fas fa-heart text-red-500"></i>{" "}
      <a
        href="https://www.linkedin.com/in/subhadip-shee-77a469235"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400"
        title="Subhadip Shee's Linkedin Profile"
      >
        Subhadip Shee
      </a>{" "}
      <i className="fas fa-copyright"></i> {year}{" "}
      <strong className="text-yellow-400">
        Food<span className="text-blue-400">Lover</span>
      </strong>
    </div>
  );
};

export default Footer;

