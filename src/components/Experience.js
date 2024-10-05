import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import experienceData from "../data/experienceData";

const Experience = () => {
  return (
    <Section>
      <ContentWrapper>
        {/* <h2>Experience</h2> */}
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#2e3b4e",
                color: "#e0e0e0",
                textAlign: "left",
              }} // Align text to the left
              contentArrowStyle={{ borderRight: "7px solid #2e3b4e" }}
              date={experience.duration}
              iconStyle={{ background: "#39b3a3", color: "#e0e0e0" }}
              icon={<FaBriefcase />}
            >
              <Title>{experience.title}</Title>
              <Subtitle>{experience.company}</Subtitle>
              <ResponsibilityList>
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ResponsibilityList>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100vh;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  max-height: 100vh;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ResponsibilityList = styled.ul`
  list-style-type: circle;
  margin-left: 1.5rem;
  font-size: 0.9rem;
`;

export default Experience;
