"use client";

export default function Nav() {
  return (
    <header className="my-24">
      <div className="w-full">
        <div className="flex items-center justify-center w-full h-full py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">
                  New feature
                </span>
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum sit cum iure qui, nostrum at sapiente ducimus.
                </p>
                <a
                  className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                  href="#"
                >
                  start your free trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
