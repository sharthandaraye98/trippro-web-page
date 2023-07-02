import React from "react";
import responsiveImg from "../images/responsiveImg.png";
import wordpressImg from "../images/wordpressImg.png";
import shoppingImg from "../images/shoppingImg.png";
import backgroundImg from "../images/backgrounImg.png";
import LaptopScreen from "../images/LaptopScreen.png";
import tabletImg from "../images/tabletImg.png";
import "./styles.css";
const Home = () => {
  return (
    <div className="">
      <div className="h-screen">
        <div
          className="flex flex-col "
          style={{
            backgroundImage: `url(${backgroundImg})`,
            height: "510px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "GrayText",
          }}
        >
          <div className="mt-16">
            <h1 className="font-light text-5xl text-white">
              TRIPPRO - AN EXOMMERCE SOLUTION
            </h1>
          </div>
          <div className="mx-28 py-7">
            <p className="font-regular text-base text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              corporis sed, voluptates expedita enim minima natus distinctio
              neque recusandae cum architecto eligendi beatae ad at unde, non
              totam culpa? Quidem.
            </p>
          </div>
          <div className="flex flex-row py-7 justify-center">
            <p className="font-bold text-white px-5 pt-4">Build for:</p>
            <img src={responsiveImg} alt="responsive image" />
            <hr className="ml-5 first-letter:border border-solid bg-white border-white rounded-sm w-1 h-[90%] self-center"></hr>
            <div className="px-5">
              <p className="font-regular text-white">Technologies:</p>
              <p className="font-bold text-white">Wordpress</p>
            </div>
            <img src={wordpressImg} alt="wordpress image" />
            <hr className="ml-5 border border-solid bg-white border-white rounded-sm w-1 h-[90%] self-center"></hr>
            <div className="px-5">
              <p className="font-regular text-white">Industry:</p>
              <p className="font-bold text-white">Ecommerce</p>
            </div>
            <img src={shoppingImg} alt="shopping image" />
          </div>
          <div className="flex justify-center">
            <img className="h-80" src={LaptopScreen} alt="laptop screen" />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col flex-wrap content-end basis-1/2">
          <h2 className="font-bold text-2xl text-left">
            ABOUT <span className="text-cyan-500">TRIPPRO</span>
          </h2>
          <hr className="my-3 border border-solid bg-cyan-500 border-white rounded-sm w-24 h-1"></hr>
          <p className="w-9/12 text-justify leading-6 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            officia hic vel commodi obcaecati quis maiores? Quibusdam similique,
            neque consequuntur nemo modi voluptate iusto, expedita iste rem
            nihil numquam suscipit.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta, officia hic vel commodi obcaecati quis
            maiores? Quibusdam similique, neque consequuntur nemo modi voluptate
            iusto, expedita iste rem nihil numquam suscipit.
          </p>

          <div className="flex justify-start mt-8">
            <button
              className="w-48 h-12 rounded-full text-white
        bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-sm font-bold"
            >
              TOUR TO WEBSITE
            </button>
          </div>
        </div>
        <div className="flex justify-center basis-1/2">
          <img className="w-80" src={tabletImg} alt="tablet image" />
        </div>
      </div>
    </div>
  );
};
export default Home;
