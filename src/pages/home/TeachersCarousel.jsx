import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";
import imgUrl1 from '../../assets/img/teacher1.jpg';
import imgUrl2 from '../../assets/img/teacher2.png';
import imgUrl3 from '../../assets/img/teacher3.jpg';
import imgUrl4 from '../../assets/img/teacher4.jpg';


const teachers = [
  {
    name: "James Bond",
    role: "Qrafik Dizayner",
    img: imgUrl1
  },
  {
    name: "Katniss Everdeen",
    role: "Qrafik Dizayner",
    img: imgUrl2
  },
  {
    name: "Jack Sparrow",
    role: "Qrafik Dizayner",
    img: imgUrl3
  },
  {
    name: "Joanna Doe",
    role: "Qrafik Dizayner",
    img: imgUrl4
  },
];

export default function Carousel() {
  const carouselRef = useRef();

  return (
    <div className="carousel-container">
      <motion.div
        ref={carouselRef}
        className="carousel-track"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {[...teachers, ...teachers].map((member, index) => (
          <div key={index} className="carousel-item">
            <div className="image-wrapper">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
