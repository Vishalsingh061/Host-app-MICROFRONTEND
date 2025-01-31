import React, { lazy, Suspense, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from './design-system/theme';
import { Card } from './design-system/components/Card';

const ChatApp = lazy(() => import('chatApp/ChatApp'));
const EmailApp = lazy(() => import('emailApp/EmailApp'));

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20);
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
`;

const Header = styled.header`
  background-color: white;
  padding: ${theme.spacing.lg};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${theme.colors.primary};
  margin: 0;
  font-size: 24px;
`;

const NavigationContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const NavButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSize.large};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.active ? theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : theme.colors.primary};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const AppCard = styled(Card)`
  margin-top: ${theme.spacing.xl};
  min-height: 600px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.lg};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  font-size: ${theme.typography.fontSize.large};
  color: ${theme.colors.primary};
`;

const App = () => {
    const [activeApp, setActiveApp] = useState('chat');

    return (
        <AppContainer>
            <Header>
                <HeaderContent>
                    <Logo>Bluebash Micro-Frontend POC</Logo>
                    <NavigationContainer>
                        <NavButton
                            active={activeApp === 'chat'}
                            onClick={() => setActiveApp('chat')}
                        >
                            Chat App
                        </NavButton>
                        <NavButton
                            active={activeApp === 'email'}
                            onClick={() => setActiveApp('email')}
                        >
                            Email App
                        </NavButton>
                    </NavigationContainer>
                </HeaderContent>
            </Header>

            <ContentContainer>
                <AppCard>
                    <Suspense fallback={
                        <LoadingContainer>
                            <div>Loading {activeApp === 'chat' ? 'Chat' : 'Email'} Application...</div>
                        </LoadingContainer>
                    }>
                        {activeApp === 'chat' ? <ChatApp /> : <EmailApp />}
                    </Suspense>
                </AppCard>
            </ContentContainer>
        </AppContainer>
    );
};

export default App;