const Hero = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mx-auto text-center">
            <div className="flex flex-col">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Minimal URL Shortener
              </h1>
              <strong className="font-extrabold flex-nowrap text-[1.4rem] md:text-4xl md:mt-2 text-red-700 sm:block">
                {" "}
                Seedhi baath, No backwaas.{" "}
              </strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
