const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="body-font">
        <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl">Olws Emporium</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
