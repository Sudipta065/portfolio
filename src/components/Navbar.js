import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  ProjectOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import {
  FaCodepen,
  FaLaptopCode,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaRegFileAlt,
} from "react-icons/fa";

const { Sider } = Layout;

const Navbar = ({ currentTab, setCurrentTab }) => {
  return (
    <SiderWrapper>
      <Sider
        width={310}
        style={{
          backgroundColor: "#1e1e1e",
          height: "100vh",
          position: "fixed",
          paddingTop:"4rem",
          left: 0,
          top: 0,
          zIndex: 1000,
        }}
      >
        <Logo href="/">Sudipta Adhikary</Logo>
        <SubLogo>Software Engineer</SubLogo>

        {/* Contact Information */}
        <ContactInfo>
          <ContactItem>
            <FaEnvelope />
            <ContactLink href="mailto:sudipta80065@gmail.com">
              sudipta80065@gmail.com
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <FaPhoneAlt />
            <ContactLink href="tel:+639276420667">+639276420667</ContactLink>
          </ContactItem>
          <ContactItem>
            <FaPhoneAlt />
            <ContactLink href="tel:+8801989212670">+8801989212670</ContactLink>
          </ContactItem>
          {/* Social Links */}
        </ContactInfo>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[currentTab]}
          style={{ backgroundColor: "#1e1e1e", color: "#ddd" ,fontSize:"1.2rem"}}
          onClick={({ key }) => setCurrentTab(key)}
        >
          <Menu.Item key="about" icon={<UserOutlined style={{fontSize:"1.6rem" ,marginRight:".5rem"}} />}>
            About
          </Menu.Item>
          <Menu.Item key="experience" icon={<SolutionOutlined style={{fontSize:"1.6rem",marginRight:".5rem"}} />}>
            Experience
          </Menu.Item>
          <Menu.Item key="projects" icon={<ProjectOutlined style={{fontSize:"1.6rem",marginRight:".5rem"}} />}>
            Projects
          </Menu.Item>
        </Menu>
        <SocialLinks>
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
          {/* Resume Link */}
          <SocialLink
            href="https://drive.google.com/file/d/1do2Vs0Dt5mlO22nsHN1v0VkxYb-IEyHf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRegFileAlt />
          </SocialLink>
        </SocialLinks>
      </Sider>
    </SiderWrapper>
  );
};

const SiderWrapper = styled.div`
  height: 100vh;
  margin-top:10rem;

  .ant-menu-item-selected {
    background-color: #008080 !important; 

  .ant-menu-item-selected a {
    color: #ffffff !important; 
  }
`;

const Logo = styled.a`
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.accent};
  display: block;
  padding: 1rem;
  text-align: center;
`;
const SubLogo = styled.a`
  font-family: 'Poppins', sans-serif; 
  font-size: 1.4rem;
  font-weight: bold;
  color: #b0b0b0;
  display: block;
  padding: 1rem;
  text-align: center;
`;
const ContactInfo = styled.div`
  padding: 1rem;
  margin: 0.5rem 0 1rem 0;
  text-align: center;
`;


const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: ${(props) => props.theme.accent};
`;

const ContactLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.accent};
  // font-size: 1.5rem;
  font-size: 2.3rem;
  &:hover {
    color: #1e8e8e;
  }
`;

export default Navbar;
