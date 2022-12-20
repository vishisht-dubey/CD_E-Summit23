import React, {useEffect, useRef} from "react";
import Lottie from "lottie-react";
import animation from './responsibilities.json'

const Responsibilities = () => {

  return(
  <div className="grid mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl sm:grid-flow-col grid-flow-row gap-10 p-10">
    <Lottie animationData={animation}/>

    <div className="flex flex-col justify-center">
      <div className="max-w-xl mb-6">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
          Responsibilities
        </h2>
      </div>

      <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
        <ul className="space-y-3">
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            The Campus Director must assist the students with their total
            capacity in registering for E-Cell IIT BHU&apos;s E-Summit&apos;23
            competitions.
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            The Campus Director must share all the updates regarding
            E-Summit&apos;23 on a minimum of six WhatsApp groups of their
            college community.
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            The Campus Director may coordinate with the college authorities to
            extensively circulate the message regarding the conduction of E-Cell
            IIT BHU&apos;s E-Summit&apos;23.
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            The Campus Director may create a separate WhatsApp Group to share
            all the updates and notices regarding E-Cell IIT BHU&apos;s
            E-Summit&apos;23 for all interested students.
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            The Campus Director must keep a tab on the total headcount of
            registered students and valid proof for each registered student.
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            The Campus Director must utilize their social media accounts in
            promoting E-Cell IIT BHU&apos;s E-Summit&apos;23 to the best of
            their capacity.
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            The Campus Director may organize events/sessions promoting
            entrepreneurship in their respective colleges and spread the message
            about the conduction of E-Cell IIT BHU&apos;s E-Summit&apos;23.
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};
export default Responsibilities;
