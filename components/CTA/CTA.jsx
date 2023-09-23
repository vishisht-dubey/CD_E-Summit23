import { useRouter } from "next/router";
import React from "react";
import { UserAuth } from "../../context/AuthContext";
import Dashboard from "../Dashboard/Dashboard";

const CTA = () => {
  const router = useRouter();
  const { handleGoogleSignIn, logout, user } = UserAuth();
  return (
    <div>
      <section className="">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h1 className="text-3xl font-thin tracking-tight sm:text-4xl text-black">
            Be the flag bearer of Entrepreneurship in your college.
          </h1>

          {/* <h3 className="font-bold  text-white-700 text-5xl mt-3 ">
            Register Now
          </h3> */}

          <div className="mt-6 sm:-mx-2">
            <div className="inline-flex w-full sm:w-auto sm:mx-2">
              <button
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-600"
                onClick={() => {
                  user?.name
                    ? router.replace("/dashboard")
                    : handleGoogleSignIn();
                }}
              >
                {user?.name ? "Go to Dashboard" : "Register Now"}
              </button>
            </div>

            {/* <div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
              <a
                href="#"
                class="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80"
              >
                Start a Journey
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
