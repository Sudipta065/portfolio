import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import projectData from "../data/projectData";

const Projects = () => {
  const slideIn = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { mass: 1, tension: 170, friction: 26, duration: 600 },
  });
  return (
    <Section>
      <animated.div style={slideIn}>
        <ContentWrapper>
          <Title>Projects</Title>

          <ProjectGrid>
            {projectData.map((project, index) => (
              <ProjectCard key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <ButtonWrapper>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </ButtonWrapper>
                )}
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ContentWrapper>
      </animated.div>
    </Section>
  );
};

const Section = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100vh;
  overflow-y: auto;
  margin-left: 250px; 
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.accent};
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background: #2e3b4e;
  color: #e0e0e0;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 300px;
  text-align: left;
  position: relative;

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.accent};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;

  a {
    display: inline-block;
    background: ${(props) => props.theme.accent};
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
      background: #1e8e8e;
    }
  }
`;

export default Projects;
