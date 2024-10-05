import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
const About = () => {
  const slideIn = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { mass: 1, tension: 170, friction: 26, duration: 600 },
  });
  return (
    <Section>
      <animated.div style={slideIn}>
        <ContentWrapper>
          <Title>About Me</Title>
          <Paragraph>
            I am a passionate Front End Software Engineer with over 4 years of
            experience in building web and mobile applications. I specialize in
            creating user-friendly interfaces using modern technologies like
            React, React Native, and more. My goal is to bring impactful
            solutions to life through code.
          </Paragraph>

          <SubTitle>Skills</SubTitle>
          <SkillList>
            <SkillItem>JavaScript (ES6+)</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>ReactJS</SkillItem>
            <SkillItem>React Native</SkillItem>
            <SkillItem>React Router</SkillItem>
            <SkillItem>Firebase</SkillItem>
            <SkillItem>React Hooks</SkillItem>
            <SkillItem>RxJS</SkillItem>
            <SkillItem>Redux</SkillItem>
            <SkillItem>Redux Toolkit</SkillItem>
            <SkillItem>Axios</SkillItem>
            <SkillItem>React Query</SkillItem>
            <SkillItem>AntD</SkillItem>
            <SkillItem>REST API</SkillItem>
            <SkillItem>GraphQL</SkillItem>
            <SkillItem>HTML5</SkillItem>
            <SkillItem>CSS3</SkillItem>
            <SkillItem>SCSS</SkillItem>
            <SkillItem>Semantic UI</SkillItem>
            <SkillItem>Recharts</SkillItem>
            <SkillItem>Bootstrap</SkillItem>
            <SkillItem>jQuery</SkillItem>
            <SkillItem>Flexbox</SkillItem>
            <SkillItem>Git</SkillItem>
            <SkillItem>JIRA</SkillItem>
          </SkillList>
        </ContentWrapper>
      </animated.div>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  padding: 2rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.accent};
  text-align: left; /* Left-align the title */
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.accent};
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: left; /* Left-align the subtitle */
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #b0b0b0;
  text-align: left; /* Left-align the paragraph */
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Left-align the skills */
  gap: 0.5rem;
`;

const SkillItem = styled.li`
  background: #2e3b4e; /* Dark slate color for a refined look */
  color: #e0e0e0; /* Light gray for the text */
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add subtle shadow for depth */

  &:hover {
    background: #3c4b61; /* Slightly lighter slate color for hover */
    transform: scale(1.05);
  }
`;

export default About;
