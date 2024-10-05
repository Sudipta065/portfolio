import React from "react";
import styled from "styled-components";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaLaptopCode,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <ContactInfo>
        <ContactItem>
          <FaEnvelope />
          <ContactLink href="mailto:sudipta80065@gmail.com">
            sudipta80065@gmail.com
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <FaPhone />
          <ContactLink href="tel:+639276420667">+639276420667</ContactLink>
        </ContactItem>
      </ContactInfo>
      <Socials>
        <SocialLink
          href="https://www.linkedin.com/in/sudipta-adhikary-null/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          href="https://github.com/Sudipta065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://codepen.io/sudipta065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCodepen />
        </SocialLink>
        <SocialLink
          href="https://leetcode.com/u/YThdaS2p8u/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLaptopCode />
        </SocialLink>
      </Socials>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContactInfo = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
`;

const ContactLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Socials = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.accent};
  font-size: 2rem;

  &:hover {
    color: #1e8e8e; /* Slightly different shade on hover */
  }
`;

export default Contact;
