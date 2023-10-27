import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import animation from './hero.json'

const Hero = () => {
  const router = useRouter();
  const { handleGoogleSignIn, logout, user } = UserAuth();
  return (
    <div>
      <section className="grid mx-auto  px-4  sm:px-6 lg:px-8 max-w-full">
        <div className="grid mx-auto max-w-screen-xl px-4 py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            {/* <h1 className="max-w-2xl mb-10 font-thin tracking-tight leading-none text-lg md:text-5xl xl:text-6xl dark:text-white">
              Join the 
            </h1> */}
            <span className="sm:text-8xl text-5xl max-w-2xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Campus Director Programme!
            </span>
            <p className="text-3xl text-gray-500 font-medium mt-8">
              Accelerate the entrepreneurial journey in your college!
            </p>
            <p className="max-w-2xl  my-8 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl break-words">
              Become the Student Lead of enhancing and expanding the
              entrepreneurial opportunities in your college!
            </p>
            <button
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-600"
              onClick={() => {
                user?.name
                  ? router.replace("/dashboard")
                  : handleGoogleSignIn();
              }}
            >
              {user?.name ? "Go to Dashboard" : "Register Now"}
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <a
              href="#whyCD"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-black-300 rounded-lg text-white border-gray-700 bg-black hover:bg-gray-800 mt-2"
            >
              Learn More 
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex" >
          <Lottie animationData={animation}/>   
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
