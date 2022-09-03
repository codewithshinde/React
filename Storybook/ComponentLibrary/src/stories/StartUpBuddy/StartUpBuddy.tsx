import React from "react";
import { ThemeProvider, Theme } from "@fluentui/react/lib/Theme";
import PersonalInfo from "../PersonalInfo";
import SideNav from "../SideNav/SideNav";
import darkTheme from "./modes/Darkmode";
import { Grid, Header, SideBar, Content, Footer } from "./styled";
import lightTheme from "./modes/Lightmode";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import TimeBar from "../TimeBar";
import TimeSheet from "../TimeSheet/TimeSheet";
import { loadTheme } from "@fluentui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Path } from "./routes/Path";
import LeavePanel from "../LeavePanel/LeavePanel";
import Calender from "../Calender/Calender";
import MyCharts from "../Charts/Chart";

const StartUpBuddy: React.FC<{}> = () => {
  initializeIcons();
  loadTheme(lightTheme);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Grid>
          <Header />
          <SideBar>
            <SideNav></SideNav>
          </SideBar>
          <Content>
            <Routes>
              <Route path={Path.TIMESHEET} element={<TimeSheet />} />
              <Route path={Path.LEAVE} element={<LeavePanel />} />
              <Route path={Path.PERSONAL_INFO} element={<PersonalInfo />} />
              <Route path={Path.WOK_LOG_CALENDER} element={<Calender />} />
              <Route path={Path.CHARTS} element={<MyCharts />} />
            </Routes>
          </Content>
          <Footer />
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default StartUpBuddy;
