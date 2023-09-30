import React from "react";
import Lottie from "lottie-react";
import animation from './why campus director.json'




const Why = () => {

  return (
    <div>
      <div className="py-16">
        <div className=" container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
          <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 className="text-4xl font-bold text-gray-800 md:text-5xl text-black">
                Why
              </h1>
              <h1 className="text-4xl font-bold text-gray-800 md:text-5xl ">
                <span className="text-primary text-orange-600">
                  Campus Director
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-500">
                Devoted to acting as a symbiotic link between the entrepreneurs
                and the existing startup ecosystem, E-Cell IIT BHU provides you
                with an opportunity to lead and educate the students masses in
                your college with various startup related activities and events
                to inculcate the entrpreneurial culture in your own college!
              </p>
              <div className="flex flex-wrap gap-6">
                {/* <a
            href="#"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-base font-semibold text-white dark:text-dark"
              >Shop now</span
            >
          </a> */}
                <a
                  href="#what-we-offer"
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 before:border-black before:bg-black sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary text-white">
                    Learn More
                  </span>
                </a>
              </div>
            </div>
            <Lottie animationData={animation}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
