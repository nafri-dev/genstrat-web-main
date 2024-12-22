import { useEffect, useRef, useState } from "react";
import Image from "next/image";  // Import Next.js Image component
import styles from "./TestimonialSection.module.css"; // Import CSS module

import stu1 from "@/assets/home/Testimony.png";

const TestimonialSection = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    { id: 1, name: "John Doe", feedback: "Amazing service!", img: stu1  },
    { id: 2, name: "Jane Smith", feedback: "Loved the experience.", img:stu1 },
    { id: 3, name: "Mike Brown", feedback: "Highly recommend it!", img:stu1 },
    { id: 4, name: "Emily Davis", feedback: "Outstanding support!", img:stu1 },
    { id: 5, name: "Sarah Wilson", feedback: "Best decision ever!", img:stu1 },
    { id: 6, name: "Chris Johnson", feedback: "Very satisfied!", img:stu1 },
    { id: 7, name: "Anna White", feedback: "Professional and friendly.", img:stu1 },
    { id: 8, name: "Tom Harris", feedback: "Exceeded my expectations.", img:stu1 },
    { id: 9, name: "Linda Clark", feedback: "Top-notch quality!", img:stu1 },
    { id: 10, name: "James Lewis", feedback: "Exceptional work!", img:stu1 },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;

    if (!isHovered) {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollLeft += 2; // Adjust speed by changing the value
      }, 20);
    }

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  return (
    <div
      ref={scrollContainerRef}
      className={styles.testimonialContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className={styles.testimonialCard}>
          <Image
            src={testimonial.img}
            alt={testimonial.name}
            width={400}
            height={200}
            className={styles.testimonialImage}
            objectFit="cover"
            priority // Optional: Use this to load images eagerly (good for hero images or above-the-fold content)
          />
         {/* <h3 className={styles.testimonialName}>{testimonial.name}</h3>
          <p className={styles.testimonialFeedback}>{testimonial.feedback}</p>*/}
        </div>
      ))}
    </div>
  );
};

export default TestimonialSection;
