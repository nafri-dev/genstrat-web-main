import React from "react";
import { Fragment } from "react";
import solutions from "@/section/home/intelligentSolutions/Solutions.module.css";
import solution1 from "@/assets/home/solution1.jpg";
import solution2 from "@/assets/home/solution2.jpg";
import solution3 from "@/assets/home/solution3.jpg";
import solution4 from "@/assets/home/solution4.jpg";
import solution5 from "@/assets/home/solution5.jpg";
import Image from "next/image";

const Solutions = () => {
  return (
    <Fragment>
      <div className={solutions.home_solutions} id="solutions">
        <div className={solutions.home_solutions_container}>
          <div className={solutions.home_solutions_heading_container}>
            <div>
              <h1>Our Innovative Platform for Your Growth</h1>
            </div>
            <div>
              <p>
                Unlock personalized career pathways and innovative solutions to
                empower students, job seekers, and professionals to thrive and
                create impactful change.
              </p>
            </div>
          </div>

          <div className={solutions.home_solutions_parallax}>
            <div className={solutions.home_solutions_parallax_container_one}>
              <div className={solutions.home_solutions_parallax_item_one}>
             
                <div>
                  <h2>Rapid Innovation Empower ideas to life</h2>
                  <p>
                    Our streamlined processes enable swift ideation and
                    prototyping, ensuring your innovative concepts turn into
                    reality faster, keeping you ahead in a competitive world.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_Image_container}>
                <Image src={solution1.src} alt="Image" />
              </div>
            </div>

            <div className={solutions.home_solutions_parallax_container_two}>
              <div className={solutions.home_solutions_parallax_item_one}>
               
                <div>
                  <h2> Seamless Collaboration Connect, Create, Collaborate</h2>
                  <p>
                    GenLab fosters an ecosystem where students, startups, and
                    professionals collaborate effortlessly to design impactful
                    solutions for tomorrows challenges.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_Image_container}>
                <Image src={solution2.src} alt="Image" />
              </div>
            </div>

            <div className={solutions.home_solutions_parallax_container_three}>
              <div className={solutions.home_solutions_parallax_item_one}>
                <div>
                  <h2>Comprehensive Mentorship Guidance that drives success</h2>
                  <p>
                    Access industry experts and personalized guidance throughout
                    your journey, from conceptualization to execution, ensuring
                    growth and learning at every stage.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_Image_container}>
                <Image src={solution3.src} alt="Image" />
              </div>
            </div>

            <div className={solutions.home_solutions_parallax_container_four}>
              <div className={solutions.home_solutions_parallax_item_one}>
                <div>
                  <h2>Scalable Solutions Innovations that grow with you</h2>
                  <p>
                    From startups to enterprises, GenLabs resources and
                    infrastructure are tailored to scale your projects, ensuring
                    long-term sustainability and impact.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_Image_container}>
                <Image src={solution4.src} alt="Image" />
              </div>
            </div>

            <div className={solutions.home_solutions_parallax_container_five}>
              <div className={solutions.home_solutions_parallax_item_one}>
                <div>
                  <h2>End-to-End Support Building innovations, together</h2>
                  <p>
                    We provide complete support, including resources, networking
                    opportunities, and cutting-edge tools, to ensure your
                    journey in innovation is seamless and rewarding.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_Image_container}>
                <Image src={solution5.src} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Solutions;
