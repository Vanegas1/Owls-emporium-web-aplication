
const GetStarted = () => {
  return (
    <div>
      <section className=" text-gray-600 body-font bg-blue-900 bg-gradient-to-t from-blue-950 h-[500px] flex ">
        <div className=" flex px-0 md:px-32 md:py-36 md:flex-row flex-col justify-center">
          <div className="lg:flex-1 md:w-full lg:pr-24 md:text-center flex flex-col items-center md:items-start mb-16 md:mb-0 text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Start shopping we are your best option
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              Get everything you want easily, quickly and securely in one place.
              Clothing, technology, materials, entertainment and much more.
            </p>
            <div className="flex lg:flex-row md:flex-col">
              <button className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-100 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GetStarted;
