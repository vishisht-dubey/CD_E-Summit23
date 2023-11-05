import React from "react";
import Carousel from "react-material-ui-carousel";
const items = [
  {
    name: "Vishwanathan Iyer",
    role: "VP Architectures-APJ, Cisco",
    imgURL: "",
    descripiton:
      "E-Cell IIT(BHU), Varanasi, is a very vibrant group of student entrepreneurs and mentors who are a very passionate group of alumni and friends of IIT(BHU). whatever they do, whether the annual E-Summit, Culture E-Cell or ThingQbator, they do with so much enthusiasm and energy. As a friend of IIT(BHU), I very much enjoy teaching my entrepreneurship class every year to future entrepreneurs, organized by the dynamic IIT(BHU) E-Cell volunteers. It is also a pleasure to enjoy the hospitality of the place and students which is very unique to IIT(BHU).",
  },
  {
    name: "Manish Gupta",
    role: "Founder, Alphonso Inc.",
    imgURL: "",
    descripiton:
      "It was an honor to participate in the E-Summit 2020. The amount of energy and passion displayed by the budding entrepreneurs was impressive at the very least. It was heartening to see how the E-Cell and the ThingQbator teams are striving to provide a platform to nurture the entrepreneurship mindset among the students. I believe that in the world of startups, there are no failures, there are successes and there are successful-failures. So, to all involved, I wish you plenty of both in the coming years.",
  },
  {
    name: "BV Jagadeesh",
    role: "Founder, KAAJ Ventures",
    imgURL: "",
    descripiton:
      "E-Cell IIT(BHU), Varanasi, is a very vibrant group of student entrepreneurs and mentors who are a very passionate group of alumni and friends of IIT(BHU). whatever they do, whether the annual E-Summit, Culture E-Cell or ThingQbator, they do with so much enthusiasm and energy. As a friend of IIT(BHU), I very much enjoy teaching my entrepreneurship class every year to future entrepreneurs, organized by the dynamic IIT(BHU) E-Cell volunteers. It is also a pleasure to enjoy the hospitality of the place and students which is very unique to IIT(BHU).",
  },
];
const CarouselItem = (props) => {
  return (
    <div>
      <p className="flex items-center text-center text-gray-500 lg:mx-8">
        {props.descripiton}
      </p>

      <div className="flex flex-col items-center justify-center mt-8">
        {/* <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""> */}
        {/* <Image
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  width={100}
                  height={100}
                /> */}

        <div className="mt-4 text-center">
          <h1 className="font-semibold text-white">{props.name}</h1>
          <span className="text-sm text-gray-400">{props.role}</span>
        </div>
      </div>
    </div>
  );
};

export default function CarouselComponent() {
  return (
    <Carousel>
      {items.map((value, index) => {
        return (
          <CarouselItem
            key={index}
            name={value.name}
            role={value.role}
            imgURL={value.imgURL}
            descripiton={value.descripiton}
          />
        );
      })}
    </Carousel>
  );
}
