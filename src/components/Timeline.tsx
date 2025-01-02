import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import data from "../assets/data/data.json"; // Jeśli importujemy statycznie

// Definicja interfejsu dla elementów timeline
interface TimelineItem {
  title: string;
  location: string;
  date: string;
  company: string;
  description: string[];
  technologies: string[];
}
 // "Conduct data preprocessing and feature engineering for multimodal medical datasets, including text, numerical, and imaging data, to enhance the performance of predictive models in cardiogenic shock interventions",
// "Design and implement a predictive model for cardiogenic shock progression, enabling clinicians to estimate the optimal window for intervention based on heterogeneous medical data in collaboration with a cardiology department",
      
function Timeline() {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]); // Definiujemy typ tablicy obiektów
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null); // Przechowujemy kliknięty element

  // Jeśli dane importowane są statycznie:
  useEffect(() => {
    setTimelineData(data); // TypeScript teraz wie, że `data` pasuje do `TimelineItem[]`
  }, []);

  const closeModal = () => {
    setSelectedItem(null);
  };

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

        {/* Modal */}
        {selectedItem && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <h2 id="tit">{selectedItem.title}</h2>

              {/* Opis jako lista */}
              <ul>
                {selectedItem.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              {/* Technologie jako chipy */}
              <div className="flex-chips">
                <span className="chip-title">Technologies:</span>
                {selectedItem.technologies.map((tech, index) => (
                  <span key={index} className="chip">
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;
