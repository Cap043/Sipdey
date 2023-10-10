import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    
      contentStyle={{
        background: "#0A0024",
        color: "#fff",
        border: "4px solid #000000",
        ":before": {
          background: "#your-desired-color",
        },
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={
        <div
          style={{
            fontSize: '20px',
            fontWeight: "bolder",
            color: "#707070", // Replace with the actual color value you want
          }}
        >
          {experience.date}
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
     <motion.div variants={textVariant()} style={{ textAlign: 'center', marginBottom: 100, fontSize:30 }}>
  <p className={styles.sectionSubText}>What I have done so far</p>
  <h2 className={styles.sectionHeadText}>Work Experience.</h2>
</motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
