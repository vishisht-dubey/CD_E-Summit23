import Image from "next/image";
import styles from "./Feature.module.scss";

import p1 from "../../assets/perks/1.png";
import p2 from "../../assets/perks/2.png";
import p3 from "../../assets/perks/3.png";
import p4 from "../../assets/perks/4.png";
import p5 from "../../assets/perks/5.png";
import p6 from "../../assets/perks/6.png";
import p7 from "../../assets/perks/7.png";
import p8 from "../../assets/perks/8.png";
import p9 from "../../assets/perks/9.png";
import p10 from "../../assets/perks/10.png";
import p11 from "../../assets/perks/11.png";
import p12 from "../../assets/perks/12.png";
import p13 from "../../assets/perks/13.png";
import p14 from "../../assets/perks/14.png";

export default function Feature() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col justify-center mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2 ">
          <h1
            className="max-w-md leading-tight  mb-6 min-h-fit font-sans text-center text-3xl font-bold tracking-tight  text-white-900 sm:text-4xl sm:leading-none xl:max-w-lg"
            style={{ fontSize: "4rem" }}
          >
            What we offer?
          </h1>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-center px-6 text-white-700 md:text-lg">
            {`Through our vision of "Learn, Build and Scale" we implement various
            initiatives and events in IIT BHU to foster the entrepreneurial
            minds and create a culture of enthralling startups bound for
            success!`}
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
        <div className="max-w-md flex items-center justify-center flex-col ">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p1} alt="p1" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            The deep ocean
          </h6> */}
          <p className="mb-3 text-sm text-center text-white-900">
            Get free E-Summit 2023 passes!
          </p>
        </div>
        <div className="max-w-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p2} alt="p2" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            When has justice
          </h6> */}
          <p className="mb-3 text-sm text-center  text-white-900">
            Network with Unicorn Founders and gain valuable experience.
          </p>
          {/* <p className="mb-3 text-sm text-center text-white-900">
          
          </p> */}
        </div>
        <div className="max-w-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p3} alt="p3" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            Organically grow
          </h6> */}
          <p className="mb-3 text-sm text-center text-white-900">
            Certificate of Merit
          </p>
          {/* <p className="mb-3 text-sm text-center text-white-900">
          
          </p> */}
        </div>
        <div className="max-w-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p4} alt="p4" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            A slice of heaven
          </h6> */}
          <p className="mb-3 text-sm text-center text-white-900">
            Unstop Membership worth 2999Rs for free.
          </p>
          {/* <p className="mb-3 text-sm text-center text-white-900"></p> */}
        </div>
        <div className="max-w-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p5} alt="p5" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            The deep ocean
          </h6> */}
          <p className="mb-3 text-sm text-center text-white-900">
            Premium versions of student developer websites
          </p>
          {/* <p className="mb-3 text-sm text-center text-white-900">
         
          </p> */}
        </div>
        <div className="max-w-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p6} alt="p6" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            The deep ocean
          </h6> */}
          <p className="mb-3 text-sm text-center text-white-900">
            Get featured on Weekly Newsletter of E-Cell IIT BHU
          </p>
        </div>
        <div className="max-w-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p7} alt="p7" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            The deep ocean
          </h6> */}
          <p className="mb-3 text-center text-sm text-white-900">
            Top performers will be featured on the social media handles of
            E-Cell IIT BHU.
          </p>
          {/* <p className="mb-3 text-center text-sm text-white-900">
           
          </p> */}
        </div>
        <div className="max-w-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p8} alt="p8" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            The deep ocean
          </h6> */}
          <p className="mb-3 text-sm text-center text-white-900">
            Get exciting goodies, including masks, T-shirts, badges, and a lot
            more.
          </p>
          {/* <p className="mb-3 text-sm text-center text-white-900">
          
          </p> */}
        </div>
        <div className="max-w-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p9} alt="p9" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            The deep ocean
          </h6> */}
          <p className="mb-3 text-sm text-center text-white-900">
            Opportunity to enter BWU Cohort Internship and will be provided with
            the prep roadmap and resources.
          </p>
          {/* <p className="mb-3 text-sm text-center text-white-900">
          
          </p> */}
        </div>
        <div className="max-w-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
            <Image src={p10} alt="p10" width={50} height={50} />
          </div>
          {/* <h6 className="mb-2 font-semibold leading-5 text-purple-600">
            The deep ocean
          </h6> */}
          <p className="mb-3 text-sm text-center text-white-900">
            Top performers will get discounted/free courses across various
            fields of interest like entrepreneurship, coding, and many more.
          </p>
          {/* <p className="mb-3 text-sm text-center text-white-900">
         
          </p> */}
        </div>
      </div>
    </div>
  );
}
