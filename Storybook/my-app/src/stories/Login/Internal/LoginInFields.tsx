import React from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import { PrimaryButton } from "@fluentui/react";


const LoginFields: React.FC<{}> = () => {
  return (
    <div>
      <TextField label="Username/Email " required />
      <TextField label="Passwod" required />
      <PrimaryButton text="Login" onClick={() => { }} disabled={false} checked={false} />
    </div>
  );
};

export default LoginFields;
