import React from "react";
import { Text, ITextProps } from "@fluentui/react/lib/Text";
import { Background, Left, LeftContent, Right, RightContent } from "./styled";
import LoginFields from "./Internal/LoginInFields";

const Login: React.FC<{}> = () => {
  return (
    <Background>
      <Left>
        <LeftContent>
          <Text variant={"xxLarge" as ITextProps["variant"]}>
            Login
          </Text>
          <LoginFields />
        </LeftContent>
      </Left>
      <Right>
        <RightContent>
          {/* <Text color="white" variant={"mega" as ITextProps["variant"]}>
            Basic Content Here
          </Text> */}
        </RightContent>
      </Right>
    </Background>
  );
};

export default Login;
