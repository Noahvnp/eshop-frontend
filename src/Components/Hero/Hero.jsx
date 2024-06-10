import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptop",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container pt-6">
      <div
        className="hero-bg-color flex min-h-[550px] items-center justify-center
                    overflow-hidden rounded-3xl sm:min-h-[650px]"
      >
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div
                    className="relative z-10 order-2 flex flex-col justify-center
                            gap-4 pt-12 text-center sm:order-1 sm:pl-3
                            sm:pt-0 sm:text-left"
                  >
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl font-bold sm:text-6xl lg:text-2xl"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl font-bold sm:text-6xl lg:text-7xl"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl font-bold uppercase text-white
                     dark:text-white/5 sm:text-[80px] md:text-[100px] lg:text-[150px]"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-out"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt={data.title2}
                        className="lg:scale-120 relative z-40 mx-auto h-[400px] w-[400px] object-contain
                        drop-shadow-[-8px_4px_6px_rgba(0,0,0,4)] sm:h-[450px] sm:w-[450px] sm:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
