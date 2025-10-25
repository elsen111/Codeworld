import React, { useRef } from "react";
import { motion } from "framer-motion";
import './Comments.css';

const comments = [
  {
    student: "Vesper",
    comment: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.'
  },
  {
    student: "Vesper",
    comment: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibusconsectetur adipiscing elit quisque faucibus.'
  },
  {
    student: "Vesper",
    comment: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adLorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.ipiscing elit quisque faucibusconsectetur adipiscing elit quisque faucibus.'
  },
  {
    student: "Vesper",
    comment: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.Lorem ipsum dolor sit amet e faucibus.'
  }
];

export default function CommentsCarousel() {
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
                {[...comments, ...comments].map((comment, index) => (
                  <div key={index} className={"carousel-item " + `comment${index}`}>
                    <h3>{comment.student}</h3>
                    <p>{comment.comment}</p>
                  </div>
                ))}
        </motion.div>
    </div>
  )
}
