import React from "react";
import { Background, Left, Right, RightContent } from "./styled";
import LogInFields from "./Internal/LogInFields";
import AdminLogin from "./Internal/AdminLogin";

const Login: React.FC<{}> = () => {
  return (
    <AdminLogin />
    // <Background>
    //   <Left>
    //     <LogInFields />
    //   </Left>
    //   <Right>
    //     <RightContent></RightContent>
    //   </Right>
    // </Background>
  );
};

export default Login;
