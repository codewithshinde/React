import React from "react";
import { ThemeProvider } from "@fluentui/react/lib/Theme";
import PersonalInfo from "../PersonalInfo";
import SideNav from "../SideNav/SideNav";
import darkTheme from "./modes/Darkmode";
import { Grid, Header, SideBar, Content, Footer } from "./styled";
import lightTheme from "./modes/Lightmode";

const StartUpBuddy: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Grid>
        <Header />
        <SideBar>
          <SideNav></SideNav>
        </SideBar>
        <Content>
          <PersonalInfo />
        </Content>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
};

export default StartUpBuddy;
