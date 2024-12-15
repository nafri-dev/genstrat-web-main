import React from "react";
import { Fragment } from "react";
import techonologyStyles from "@/section/home/technologySection/Technology.module.css";
import techOne from "@/assets/home/techOne.jpg";
import techTwo from "@/assets/home/techTwo.jpg";
import techThree from "@/assets/home/techThree.jpg";
import Image from "next/image";

const Technology = () => {
  return (
    <Fragment>
      <div className={techonologyStyles.home_technology}>
        <div className={techonologyStyles.home_technology_heading_container}>
          <h2>Tech Evolution</h2>
        </div>

        <div className={techonologyStyles.home_technology_card_container}>
          <div className={techonologyStyles.home_technology_card_container_one}>
            <h2>Next-Gen Innovation Hub:</h2>
            <div
              className={techonologyStyles.home_technology_card_img_container}
            >
              <Image src={techOne.src} alt="img"  layout="responsive"
                  width={100}
                  height={100}/>
            </div>
            <p>
              Our platform empowers creativity and collaboration, bridging
              generations to unlock limitless possibilities.
            </p>
          </div>

          <div className={techonologyStyles.home_technology_card_container_two}>
            <h2>Effortless Collaboration:</h2>
            <div
              className={techonologyStyles.home_technology_card_img_container}
            >
              <Image src={techTwo.src} alt="img"  layout="responsive"
                  width={100}
                  height={100}/>
            </div>
            <p>
              Our tools integrate effortlessly into workflows, enabling seamless
              teamwork and growth.
            </p>
          </div>

          <div
            className={techonologyStyles.home_technology_card_container_three}
          >
            <h2>Advanced AI Engine:</h2>
            <div
              className={techonologyStyles.home_technology_card_img_container}
            >
              <Image src={techThree.src} alt="img"  layout="responsive"
                  width={100}
                  height={100}/>
            </div>
            <p>
              Leveraging cutting-edge AI, we drive precise insights, creativity,
              and impactful problem-solving.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Technology;
