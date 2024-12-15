import React, { Fragment } from "react";
import approachStyles from "@/section/home/approachSection/Approach.module.css";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

const Approach = () => {
  const { openModal } = useContext(ModalContext);
  const currentYear = new Date().getFullYear();
  //&rsquo;
  return (
    <Fragment>
      <div className={approachStyles.home_approach_main}>
        <div className={approachStyles.home_approach}>
          <div className={approachStyles.home_approach_container}>
            <h3>
              GenLab&rsquo;s innovative platform bridges generational creativity
              and AI-driven insights to empower businesses with unmatched
              innovation and impact.
            </h3>
            <button onClick={openModal}>Innovate with GenLab IB</button>
          </div>
        </div>
        <div className={approachStyles.home_approach_hr_container}>
          <hr className={approachStyles.home_approach_hr} />
          <div>
            <p>
              © Copyright {currentYear} GenLab Innovation Hub. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Approach;
