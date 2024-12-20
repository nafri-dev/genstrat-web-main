import React, { Fragment } from "react";
import approachStyles from "@/section/home/approachSection/Approach.module.css";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import Footer from "../Footer section/Footer";
import Link from "next/link";


const Approach = () => {
  const { openModal } = useContext(ModalContext);
  const currentYear = new Date().getFullYear();
  //&rsquo;
  return (
    <Fragment>
      <div className={approachStyles.home_approach_main} id="approach">
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
        </div>
        <div>
        <Footer />
        </div>
        <div  className={approachStyles.home_approach_main_2}>
        <div className={approachStyles.home_approach_hr_container}>
         
        <p>
          © Copyright {currentYear} GenLab Innovation Hub.
          <span className={approachStyles.allRights}>All Rights Reserved.</span>
        </p>

           {/* <nav className={approachStyles.navLinks}>
          <Link href="#" className={approachStyles.navLink}>Contacts</Link>
          <Link href="#" className={approachStyles.navLink}>Enquiry</Link>
          <Link href="#" className={approachStyles.navLink} >Investors Relations</Link>
          
      
       
        </nav>*/}

          
        </div>
        </div>
    </Fragment>
  );
};

export default Approach;
