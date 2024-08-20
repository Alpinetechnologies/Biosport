import React, { useState, useRef } from "react";
import { TextInput, Keyboard } from "react-native";
import { InputContainer, OtpBox } from "./OtpInput.styled";

interface OtpInputProps {
  numOfDigits: number;
  onOtpChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ numOfDigits, onOtpChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(numOfDigits).fill(""));
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    setOtp(newOtp);
    onOtpChange(newOtp.join(""));

    if (text && index < numOfDigits - 1) {
      inputs.current[index + 1].focus();
    } else if (index === numOfDigits - 1) {
      Keyboard.dismiss();
    }

    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <InputContainer>
      {otp.map((digit, index) => (
        <OtpBox
          key={index}
          ref={(el: any) => (inputs.current[index] = el!)}
          style={{ borderColor: focusedInput === index ? "black" : "#BDBDBD" }}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
          onFocus={() => setFocusedInput(index)}
          onBlur={() => setFocusedInput(null)}
        />
      ))}
    </InputContainer>
  );
};

export default OtpInput;
