import styles from "@/section/home/Testimonial Section/TestimonialSection.module.css";
import image1 from "@/assets/home/Testimony.png";
import image2 from "@/assets/home/Testimony2.png";
import stu3 from "@/assets/home/Testimony 3.png";
import image4 from "@/assets/home/Testimony 4.png";
import Image from "next/image";
import { useEffect, useState } from "react";


const TestimonialSection = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
        Voices of Success
        </h1>

        
        <div className={styles.grid}>
          {/* Testimonial Card 1 */}
          <div className={styles.card}>
            {isMobile ?    <Image src={image4.src} alt="img"  layout="responsive"
                             width={100}
                             height={100}/> :    <Image src={image1.src} alt="img"  layout="responsive"
                             width={100}
                             height={100}/>}
           
          </div>

          {/* Testimonial Card 2 */}
          <div className={styles.card}>
          <div className={styles.card}>
            {isMobile ?    <Image src={stu3.src} alt="img"  layout="responsive"
                             width={100}
                             height={100}/> :    <Image src={image2.src} alt="img"  layout="responsive"
                             width={100}
                             height={100}/>}
           
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
