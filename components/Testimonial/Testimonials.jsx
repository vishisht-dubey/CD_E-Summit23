import React from "react";
import CarouselComponent from "../Carousel/carousel";
const Testimonials = () => {
  return (
    <div>
      <section className="bg-black">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center capitalize xl:text-5xl lg:text-4xl text-white">
            Testimonials from previous CDs
          </h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
          </div>
          <div className="mt-4">
          <CarouselComponent />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
