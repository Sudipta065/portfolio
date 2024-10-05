import React from "react";
import { Tabs } from "antd";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import styled from "styled-components";
import { motion } from "framer-motion";

const { TabPane } = Tabs;

const ContentTabs = () => {
  return (
    <TabsWrapper>
      <StyledTabs
        defaultActiveKey="1"
        centered
        size="large"
        tabBarStyle={{ color: "#ddd" }}
      >
        <TabPane tab="About" key="1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        </TabPane>
        <TabPane tab="Projects" key="2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.div>
        </TabPane>
        <TabPane tab="Contact" key="3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        </TabPane>
      </StyledTabs>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 2rem;
    color: #ddd;
  }

  .ant-tabs-tab {
    color: #ddd;
  }

  .ant-tabs-tab-active {
    font-weight: bold;
  }
`;

export default ContentTabs;
