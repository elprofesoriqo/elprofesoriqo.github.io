import React, { useEffect, useState } from "react";
import "../assets/styles/Academics.scss";

interface SchoolItem {
  url: string;
  title: string;
  major: string;
  date: string;
  description: string;
}

function Academics() {
  const [schools, setSchools] = useState<SchoolItem[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<SchoolItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Ładowanie danych ze zewnętrznego pliku JSON
  useEffect(() => {
    import('../assets/data/academics.json')
      .then((data) => {
        setSchools(data.default);
      })
      .catch((error) => {
        console.error('Error loading school data:', error);
      });
  }, []);


  const openModal = (school: SchoolItem) => {
    setSelectedSchool(school);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedSchool(null);
    setShowModal(false);
  };

  return (
    <div className="timeline-container" id="school">
      <h1>Academic Timeline</h1>
      {schools.length > 0 ? (
        <div className="schools-wrapper">
          {schools.map((school, index) => (
            <div
              className={`school ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              onClick={() => openModal(school)}
            >
              <h3>{school.title}</h3>
              <p>{school.major}<sub> {school.date}</sub></p>

            </div>
          ))}
        </div>
      ) : (
        <p>Loading academic information...</p>
      )}

      {showModal && selectedSchool && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedSchool.title}</h2>
            <p>{selectedSchool.description}</p>
            <p>{selectedSchool.description}</p>
            <p>{selectedSchool.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Academics;
