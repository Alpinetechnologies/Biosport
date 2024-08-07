import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 15px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #000;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const ToggleContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #f0f0f0;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 7px;
`;

const ToggleButton = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? '#fff' : 'transparent')};
  align-items: center;
`;

const HelpText = styled.Text`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

const SocialLoginContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const SocialButton = styled.TouchableOpacity`
  margin: 0 10px;
`;

const SocialIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <Container>
      <BackgroundImage
        source={{
          uri: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=5377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      >
        <ContentContainer>
          <ScrollView>
            <Title>Go Ahead and setup Your Account</Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </Subtitle>
            <ToggleContainer>
              <ToggleButton
                active={activeTab === 'login'}
                onPress={() => setActiveTab('login')}
              >
                <Text>Login</Text>
              </ToggleButton>
              <ToggleButton
                active={activeTab === 'signup'}
                onPress={() => setActiveTab('signup')}
              >
                <Text>Sign Up</Text>
              </ToggleButton>
            </ToggleContainer>

            {activeTab === 'login' ? (
              <>
                <Input
                  placeholder="Enter Email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
                <Input
                  placeholder="Enter Password"
                  secureTextEntry={isPasswordVisible}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Text>
                    {isPasswordVisible ? 'Show Password' : 'Hide Password'}
                  </Text>
                </TouchableOpacity>
                <Button>
                  <ButtonText>Login</ButtonText>
                </Button>
              </>
            ) : (
              <>
                <Input
                  placeholder="Enter Your Name"
                  value={name}
                  onChangeText={setName}
                />
                <Input
                  placeholder="Enter Email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
                <Input
                  placeholder="Enter Password"
                  secureTextEntry={isPasswordVisible}
                  value={password}
                  onChangeText={setPassword}
                />
                <Button>
                  <ButtonText>Sign Up</ButtonText>
                </Button>
              </>
            )}

            <HelpText>
              Trouble In Signing In?{' '}
              <Text style={{ color: 'blue' }}>Need help</Text>
            </HelpText>

            <SocialLoginContainer>
              <SocialButton>
                <SocialIcon source={{ uri: 'google_icon_url_here' }} />
              </SocialButton>
              <SocialButton>
                <SocialIcon source={{ uri: 'apple_icon_url_here' }} />
              </SocialButton>
            </SocialLoginContainer>
          </ScrollView>
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default LoginScreen;
