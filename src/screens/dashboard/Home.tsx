import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding: 15px;
`;

const HeaderContainer = styled.View`
  height: 100px;
  background-color: white;
  padding-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HeaderTxt = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #888;
  line-height: 22px;
`;
const HeadersubTxt = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: "#212121";
  line-height: 22px;
`;
const Avtar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
const StartContainer = styled.View`
  background-color: white;
  padding: 20px;
  padding-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: #eeeeee;
  border-width: 1px;
  border-radius: 16px;
  margin-vertical: 15px;
`;

const StartContainerLogoContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-color: #eeeeee;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const StartContainerLogo = styled.Image`
  width: 25px;
  height: 25px;
`;

const StartContainerTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const StartContainerSubTitle = styled.Text`
  font-size: 12px;
  font-weight: light;
  color: #757575;
`;

const StartButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #000;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  border-width: 1.5px;
  border-color: #ceff00;
`;

const StartButtonText = styled.Text`
  color: #fff;
  font-size: 8px;
  font-weight: bold;
  text-transform: uppercase;
`;

const BookContainer = styled.ImageBackground`
  height: 201px;
  margin-vertical: 15px;
  border-radius: 16px;
  overflow: hidden;
  padding: 5px;
  padding-top: 20px;
  padding-left: 15px;
`;

const BookContainerAlertText = styled.Text`
  color: #f75555;
  font-size: 12px;
  font-weight: medium;
  text-transform: uppercase;
  line-height: 21px;
`;
const BookContainerHeading = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
`;
const BookContainerSubTitle = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: light;
  line-height: 21px;
`;
const BookButton = styled.TouchableOpacity`
  width: 80px;
  height: 25px;
  background-color: #fff;
  border-radius: 44px;
  align-items: center;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const BookButtonText = styled.Text`
  color: #000000;
  font-size: 12px;
  font-weight: bold;
`;
const ContentContainer = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.9);
`;

const BootomImage = styled.Image`
  width: 100%;
  height: 250px;
  resize-mode: stretch;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  over-flow: hidden;
  border-width: 1px;
  border-color: #9e9e9e;
`;
const HomeScreen = () => {
  return (
    <Container>
      <HeaderContainer>
        <View>
          <HeaderTxt>Hi Robert</HeaderTxt>
          <HeadersubTxt>
            Your routines are ready{"\n"}let’s start winning
          </HeadersubTxt>
        </View>
        <Avtar
          source={{
            uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2151",
          }}
        />
      </HeaderContainer>

      <ContentContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StartContainer>
            <StartContainerLogoContainer>
              <StartContainerLogo
                source={{
                  uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2151",
                }}
              />
            </StartContainerLogoContainer>
            <View>
              <StartContainerTitle>Start Today's Workout</StartContainerTitle>
              <StartContainerSubTitle>
                Today, 19 May 2024
              </StartContainerSubTitle>
            </View>
            <StartButton>
              <StartButtonText>START</StartButtonText>
            </StartButton>
          </StartContainer>

          <BookContainer
            source={{
              uri: "https://addicted2success.com/wp-content/uploads/2013/07/4-Powerful-Fitness-Workouts-For-Successful-Women.jpg",
            }}
          >
            <BookContainerAlertText>Important</BookContainerAlertText>
            <BookContainerHeading>Genome Sequencing Test</BookContainerHeading>
            <BookContainerSubTitle>
              For starting and analysing for your personalised plans, you will
              need to take a genomic sequencing test
            </BookContainerSubTitle>

            <BookButton>
              <BookButtonText>Book</BookButtonText>
            </BookButton>
          </BookContainer>

          <BootomImage
            source={{
              uri: "https://drnutan.com/wp-content/uploads/2024/06/downwardd-facing-dog-1024x1024.jpg",
            }}
          />
        </ScrollView>
      </ContentContainer>
    </Container>
  );
};

export default HomeScreen;
