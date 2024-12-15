import React, { useContext } from "react";
import { Fragment } from "react";
import businessStyles from "@/section/home/businessSection/Business.module.css";
import { PiArrowRightThin } from "react-icons/pi";
import { ModalContext } from "@/context/ModalContext";

const Business = () => {
  const { openModal } = useContext(ModalContext);

  const handleContainerClick = () => {
    openModal();
  };

  return (
    <Fragment>
      <div className={businessStyles.home_business} id="pricing">
        <div className={businessStyles.home_business_heading_container}>
          <h1>Join GenLab IB
          </h1>
        </div>
        <div className={businessStyles.home_business_container}>
          <div
            className={businessStyles.home_business_container_one}
            onClick={handleContainerClick}
          >
            <div>
              <h1>Students Program
              </h1>
            </div>
            <div>
              <p>
              For aspiring innovators looking to explore and develop
              their skills in a collaborative environment.
              </p>
            </div>
            <div>
              <PiArrowRightThin
                className={businessStyles.home_business_rightarrow_icon}
              />
            </div>
          </div>

          <div
            className={businessStyles.home_business_container_two}
            onClick={handleContainerClick}
          >
            <div>
              <h1>Job Seekers Program
              </h1>
            </div>
            <div>
              <p>
              For professionals seeking opportunities to grow, connect
with mentors, and enhance their career potential.

              </p>
            </div>
            <div>
              <PiArrowRightThin
                className={businessStyles.home_business_rightarrow_icon}
              />
            </div>
          </div>

          <div
            className={businessStyles.home_business_container_three}
            onClick={handleContainerClick}
          >
            <div>
              <h1>Professional Program
              </h1>
            </div>
            <div>
              <p>
              For experienced professionals and entrepreneurs aiming
              to innovate, network, and accelerate their business goals.
              </p>
            </div>
            <div>
              <PiArrowRightThin
                className={businessStyles.home_business_rightarrow_icon}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Business;
