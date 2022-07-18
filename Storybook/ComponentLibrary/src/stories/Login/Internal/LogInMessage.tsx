import React from "react";
import { Text, ITextProps } from "@fluentui/react/lib/Text";
import { asyncLogo } from "../../Images";

const LogInMessage:React.FC<{}> = () => {
    return (
      <>
      <img src={asyncLogo} alt="Girl in a jacket" width="150" height="100"></img>
      <Text  className="welcomeMessage" variant={"xxLargePlus" as ITextProps["variant"]}>
        Welcome Back !
      </Text>
      </>
    );
  };
  
export default LogInMessage;