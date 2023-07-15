const Categories = () => {
  return (
    <div>
      <section className="text-gray-600 body-font py-36 ">
        <div className="flex justify-center items-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Some of our categories
          </h1>
        </div>
        <div className="container px-10 md:px-32 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-16  rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  SPORTS
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Sports equipment
                </h1>
                <p className="leading-relaxed mb-3">
                  T-shirts, balls, shoes, caps. We have all kinds of sporting
                  goods so you can train comfortably and with the best quality.
                  See what&apos;s in fashion.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-16 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  TECHNOLOGY
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Latest technology
                </h1>
                <p className="leading-relaxed mb-3">
                  Calculators, watches, portable batteries, headphones and more.
                  We have everything you need so you can receive your classes
                  without worries.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-16 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  ENTERTAINMENT
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Having fun is important
                </h1>
                <p className="leading-relaxed mb-3">
                  Board games, books, comics, movies and everything you can
                  think of. Relaxing is part of life, not everything is study,
                  we have what you need to have a good time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
