import Image from "next/image"
import Link from "next/link"
import {  Linkedin, Mail, InstagramIcon } from 'lucide-react'
import styles from './Footer.module.css'
import logo from "@/assets/logo/Logo2.png";


export default function Footer() {
  const currentYear = new Date().getFullYear();
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
          
            <Link href="#" className={styles.socialIcon} aria-label="Twitter">
              <span className={styles.iconBackground}><InstagramIcon /></span>
            </Link>
            <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <span className={styles.iconBackground}><Linkedin /></span>
            </Link>
            <Link href="#" className={styles.socialIcon} aria-label="Email">
              <span className={styles.iconBackground}><Mail /></span>
            </Link>
          </div>
        </div>
        <nav className={styles.navLinks}>
          <Link href="#" className={styles.navLink1}>Contacts</Link>
          <Link href="#" className={styles.navLink}>Enquiry</Link>
          <Link href="#" className={styles.navLink}>Investors Relations</Link>
          
      
       
        </nav>

      </div>
      <div className={styles.copyright}>
        <p>
          © Copyright {currentYear} GenLab Innovation Hub.
          <span className={styles.allRights}>All Rights Reserved.</span>
        </p>
      </div>
     
    </footer>
  )
}

