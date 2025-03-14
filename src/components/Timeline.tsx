import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import data from "../assets/data/data.json";

interface TimelineItem {
  title: string;
  location: string;
  date: string;
  company: string;
  description: string[];
  technologies: string[];
}

function Timeline() {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setTimelineData(data);
  }, []);

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Prevent body scrolling when modal is open on mobile
  useEffect(() => {
    if (selectedItem && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem, isMobile]);

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={item.date}
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              onTimelineElementClick={() => setSelectedItem(item)}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {selectedItem && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <h2 id="tit">{selectedItem.title}</h2>
              <h4>{selectedItem.company} • {selectedItem.location}</h4>
              <ul>
                {selectedItem.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              <div className="flex-chips">
                <span className="chip-title">Technologies:</span>
                <div className="chips-container">
                  {selectedItem.technologies.map((tech, index) => (
                    <span key={index} className="chip">
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;