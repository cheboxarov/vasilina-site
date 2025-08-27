import React from 'react';
import styled from 'styled-components';
import Contacts from '../components/Contacts';

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
`;

const ContactsPage: React.FC = () => {
  return (
    <PageWrapper>
      <Contacts />
    </PageWrapper>
  );
};

export default ContactsPage;
