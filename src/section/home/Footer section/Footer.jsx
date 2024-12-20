import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"

import styles from './Footer.module.css'
import logo from "@/assets/logo/Logo2.png";
import Insta from "@/assets/home/logo5.png"
import Linkedin from "@/assets/home/Twitter.png"
import { ModalContext } from "@/context/ModalContext";
//hi

export default function Footer() {
 
  const { openModal } = useContext(ModalContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div className={styles.logo}>
            <Image
              src={logo.src}
              alt="GI Logo"
              width={64}
              height={32}
              layout="responsive"
            />
          </div>
          <p className={styles.slogan}>
            Bridging Generations<br />
            Building Innovations
          </p>
          <div className={styles.socialLinks}>
          
            <Link href="#" className={styles.socialIcon} aria-label="instagram">
            <span >
          <Image
            src={Insta.src} // Path to your LinkedIn icon
            alt="LinkedIn"
            width={26}
            height={26} // Adjust size as needed
          />
        </span>
            </Link>
            <Link href="https://www.linkedin.com/company/genlabib/" className={styles.socialIcon} aria-label="LinkedIn">
            <span >
          <Image
            src={Linkedin.src} // Path to your LinkedIn icon
            alt="LinkedIn"
            width={26}
            height={26} // Adjust size as needed
          />
        </span>
</Link>           
          </div>
        </div>
        <nav className={styles.navLinks}>
          <p href="#"   className={styles.navLink1}>Contacts</p>
          <p  onClick={openModal} className={styles.navLink}>Enquiry</p>
          <p onClick={openModal} className={styles.navLink}>Investors Relations</p>
          
      
       
        </nav>

      </div>
      {/*<div className={styles.copyright}>
        <p>
          © Copyright {currentYear} GenLab Innovation Hub.
          <span className={styles.allRights}>All Rights Reserved.</span>
        </p>
      </div>*/}
     
    </footer>
  )
}

