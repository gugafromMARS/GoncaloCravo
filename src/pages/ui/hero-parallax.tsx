"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  projects,
}: {
  projects: {
    title: string;
    techs: string;
    reversed: boolean;
    link: string;
    thumbnail: string;
  }[];
}) => {
  let firstRow = projects.slice(0, 2);
  let secondRow = projects.slice(2, 4);
  let thirdRow = projects.slice(4, 6);
  let fourthRow = projects.slice(6, 7);
  let fifthRow;
  let sixthRow;
  let seventhRow;
  let cardHeight = "h-96";
  let titleSize = "md:text-7xl";
  let pSize = "md:text-xl";
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-500, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [500, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  if (window.matchMedia("(max-width: 1200px)").matches) {
    firstRow = projects.slice(0, 1);
    secondRow = projects.slice(1, 2);
    thirdRow = projects.slice(2, 3);
    fourthRow = projects.slice(3, 4);
    fifthRow = projects.slice(4, 5);
    sixthRow = projects.slice(5, 6);
    seventhRow = projects.slice(6, 7);
    cardHeight = "h-48";
    titleSize = "md:text-5xl";
    pSize = "md:text-lg";
  } else if (window.matchMedia("(max-width: 1300px)").matches) {
    firstRow = projects.slice(0, 1);
    secondRow = projects.slice(1, 2);
    thirdRow = projects.slice(2, 3);
    fourthRow = projects.slice(3, 4);
    fifthRow = projects.slice(4, 5);
    sixthRow = projects.slice(5, 6);
    seventhRow = projects.slice(6, 7);
    cardHeight = "h-36";
    titleSize = "md:text-5xl";
    pSize = "md:text-lg";
  }
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header titleSize={titleSize} pSize={pSize} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {!seventhRow && (
          <>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
              {firstRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row  mb-10 space-x-20 ">
              {secondRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
              {thirdRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row space-x-20 ">
              {fourthRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
          </>
        )}
        {seventhRow && (
          <>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
              {firstRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row  mb-10 space-x-20 ">
              {secondRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
              {thirdRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row space-x-20 ">
              {fourthRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
              {fifthRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row space-x-20 ">
              {sixthRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                  cardHeight={cardHeight}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
              {seventhRow.map((product) => {
                const newProduct = {
                  ...product,
                  reversed: false,
                };
                return (
                  <ProductCard
                    product={newProduct}
                    translate={translateX}
                    key={product.title}
                    cardHeight={cardHeight}
                  />
                );
              })}
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export const Header = ({ titleSize, pSize }) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className={`text-2xl ${titleSize} font-bold black`}>My Projects</h1>
      <p className={`max-w-2xl text-base ${pSize} mt-8 black`}>
        Some of my projects I've done since I started the bootcamp, and others
        I've done myself and continue to build...
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  cardHeight,
}: {
  product: {
    title: string;
    techs: string;
    reversed: boolean;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  cardHeight: string;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className={`group/product ${cardHeight} w-[30rem] relative flex-shrink-0`}
    >
      <a
        href={product.link}
        target="_blank"
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className={`absolute bottom-8 ${
          product.reversed ? "right-4" : "left-4"
        }  opacity-0 group-hover/product:opacity-100 text-white`}
      >
        {product.title}
      </h2>
      <h3
        className={`absolute top-4 ${
          product.reversed ? "right-4" : "left-4"
        }  opacity-0  group-hover/product:opacity-100 text-white`}
      >
        {product.techs}
      </h3>
    </motion.div>
  );
};
