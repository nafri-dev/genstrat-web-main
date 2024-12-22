import { useEffect, useRef, useState } from "react";
import Image from "next/image";  // Import Next.js Image component
import styles from "./TestimonialSection.module.css"; // Import CSS module
import contactImage from "@/assets/home/contact.png";

const TestimonialSection = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    { id: 1, name: "John Doe", feedback: "Amazing service!", img: contactImage  },
    { id: 2, name: "Jane Smith", feedback: "Loved the experience.", img: contactImage },
    { id: 3, name: "Mike Brown", feedback: "Highly recommend it!", img: contactImage },
    { id: 4, name: "Emily Davis", feedback: "Outstanding support!", img: contactImage },
    { id: 5, name: "Sarah Wilson", feedback: "Best decision ever!", img: contactImage },
    { id: 6, name: "Chris Johnson", feedback: "Very satisfied!", img: contactImage },
    { id: 7, name: "Anna White", feedback: "Professional and friendly.", img: contactImage },
    { id: 8, name: "Tom Harris", feedback: "Exceeded my expectations.", img: contactImage },
    { id: 9, name: "Linda Clark", feedback: "Top-notch quality!", img: contactImage },
    { id: 10, name: "James Lewis", feedback: "Exceptional work!", img: contactImage },
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
            width={100}
            height={100}
            className={styles.testimonialImage}
            objectFit="cover"
            priority // Optional: Use this to load images eagerly (good for hero images or above-the-fold content)
          />
          <h3 className={styles.testimonialName}>{testimonial.name}</h3>
          <p className={styles.testimonialFeedback}>{testimonial.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSection;
