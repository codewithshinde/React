import React from "react";
import LogInFields from "./LogInFields";
import { Blue, Green, Grid, GridItem, ViewItem, Yellow } from "./styled";

const AdminLogin: React.FC<{}> = () => {
  return (
    <Grid>
      {/* <View>
        <LogInFields />
      </View> */}
      <Blue />
      <Green />
      <Yellow />
      <Blue />
    </Grid>
  );
};

export default AdminLogin;
