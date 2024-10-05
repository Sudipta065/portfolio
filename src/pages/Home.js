import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
// import Contact from "../components/Contact";
import GlobalStyle from "../styles/GlobalStyle";

const darkTheme = {
  background: "#2c2c2c",
  text: "#ddd",
  accent: "#39b3a3",
};

const Home = () => {
  const [currentTab, setCurrentTab] = useState("about");

  const renderContent = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Layout>
        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <ContentContainer>{renderContent()}</ContentContainer>
      </Layout>
    </ThemeProvider>
  );
};

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export default Home;
