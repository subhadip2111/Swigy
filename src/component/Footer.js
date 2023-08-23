// const Footer = () => {
//   const year = new Date().getFullYear();
//   return (
//     <div className="bg-gray-800 text-white py-4 text-center">
//       Created By{" "}
//       <i className="fas fa-heart text-red-500"></i>{" "}
//       <a
//         href="https://www.linkedin.com/in/subhadip-shee-77a469235"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-400"
//         title="Subhadip Shee's Linkedin Profile"
//       >
//         Subhadip Shee
//       </a>{" "}
//       <i className="fas fa-copyright"></i> {year}{" "}
//       <strong className="text-yellow-400">
//         Food<span className="text-blue-400">Lover</span>
//       </strong>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white py-4 text-center">
      <p className="mb-2">
        Created with{" "}
        <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1" /> by{" "}
        <a
          href="https://www.linkedin.com/in/subhadip-shee-77a469235"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
          title="Subhadip Shee's Linkedin Profile"
        >
          Subhadip Shee
        </a>
      </p>
      <p className="mb-2">
        &copy; {year}{" "}
        <strong className="text-yellow-400">
          Food<span className="text-blue-400">Lover</span>
        </strong>
      </p>
      <p className="text-sm">
        All rights reserved. Designed and developed with{" "}
        <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1" /> in mind.
      </p>
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/subhadip-shee-77a469235"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 mx-2"
          title="Follow on LinkedIn"
        >
          Follow on LinkedIn
        </a>
        <a
          href="https://twitter.com/Shee7Subhadip"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 mx-2"
          title="Follow on Twitter"
        >
          Follow on Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
