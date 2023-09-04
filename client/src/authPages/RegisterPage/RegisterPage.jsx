import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "../RegisterPage/RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";

function RegisterPage() {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  function handleRegister() {
    console.log(mail, username, password);
    console.log("registering...");
  }

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an Account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        userName={username}
        setUsername={setUsername}
        setPassword={setPassword}
        password={password}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
}

export default RegisterPage;
