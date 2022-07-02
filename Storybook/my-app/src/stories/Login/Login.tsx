import React from "react";
import { Background, Left, Right, RightContent } from "./styled";
import LogInFields from "./Internal/LogInFields";

const Login: React.FC<{}> = () => {
  return (
    <Background>
      <Left>
          <LogInFields />
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
