import React, { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledContent = styled(Content)`
  margin: 24px 16px 0;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const StyledSider = styled(Sider)`
  background-color: #fff;
`;

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <StyledLayout>
      <StyledSider>Left Sider</StyledSider>
      <Layout>
        <StyledHeader>Header</StyledHeader>
        <StyledContent>{children}</StyledContent>
        <StyledFooter>Footer</StyledFooter>
      </Layout>
    </StyledLayout>
  );
};

export default BaseLayout;
