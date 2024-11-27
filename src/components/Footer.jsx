import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Footer top section with copyright */}
        <div className="text-center mb-6">
          <p className="text-sm">
            &copy; 2024 Contact Manager. All rights reserved.
          </p>
          <span className="text-sm mt-2 block text-gray-400">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/loordhujeyakumar"
              className="text-blue-500 hover:text-blue-300 transition-colors duration-200"
            >
              Loordhu Jeyakumar
            </a>{" "}
            <i className="fab fa-github"></i>
          </span>
        </div>

        {/* Footer social links section */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/loordhujeyakumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/loordhujeyakumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/loordhujeyakumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Footer bottom section with links */}
        <div className="text-center text-gray-400">
          <a
            href="/privacy-policy"
            className="text-sm hover:text-gray-300 transition-colors duration-200 mr-4"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
