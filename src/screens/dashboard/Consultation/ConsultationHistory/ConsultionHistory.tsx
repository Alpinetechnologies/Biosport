import {
  Container,
  Status,
  TestType,
  StatusValue,
  TestTypeValue,
  VerticalLine,
  ExtraDetails,
  OrderContainer,
  Upcoming,
  Previous,
  ButtonContainer,
  Button,
  ButtonText,
} from './ConsultationHistory.styled';

import React from 'react';
import { dummyData } from './temp';
import ProfileCard from '../../../../components/ProfileCard/ProfileCard';

const ConsultionHistory = () => {
  return (
    <Container>
      {/* for upcoming  */}
      <Upcoming>Upcoming</Upcoming>
      {dummyData.map(val => (
        <OrderContainer>
          <ProfileCard data={val} />
          <ExtraDetails>
            <Status>Status: </Status>
            <StatusValue>{val?.status}</StatusValue>
            <VerticalLine />
            <TestType>Test type: </TestType>
            <TestTypeValue>{val?.type}</TestTypeValue>
          </ExtraDetails>
          <ButtonContainer>
            <Button status="Upcoming">
              <ButtonText status="Upcoming">Join meet</ButtonText>
            </Button>
          </ButtonContainer>
        </OrderContainer>
      ))}

      {/* For completed */}
      <Previous>Previous Meeting</Previous>
      {dummyData.map(val => (
        <OrderContainer>
          <ProfileCard data={val} />
          <ExtraDetails>
            <Status>Status: </Status>
            <StatusValue>{val?.status}</StatusValue>
            <VerticalLine />
            <TestType>Test type: </TestType>
            <TestTypeValue>{val?.type}</TestTypeValue>
          </ExtraDetails>
          <ButtonContainer>
            <Button status="Completed">
              <ButtonText status="Completed">Join meet</ButtonText>
            </Button>
          </ButtonContainer>
        </OrderContainer>
      ))}
    </Container>
  );
};

export default ConsultionHistory;
