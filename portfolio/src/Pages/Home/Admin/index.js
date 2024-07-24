import React from 'react'
import Header from '../../../components/Header'
import { Tabs } from 'antd';
import AdminAbout from './AdminAbout';
import AdminIntro from './AdminIntro';
import AdminExperiences from './AdminExperiences';
import { useSelector } from 'react-redux';
import AdminProjects from './AdminProjects';
const { TabPane } = Tabs;

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && <div className="mt-5 p-5">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>
          <TabPane tab="About" key="2">
            <AdminAbout />
          </TabPane>
          <TabPane tab="Experience" key="3">
            <AdminExperiences />
          </TabPane>
          <TabPane tab="Projects" key="4">
            <AdminProjects />
          </TabPane>
          <TabPane tab="Courses" key="5">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Contact" key="6">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>}
    </div>
  )
}

export default Admin