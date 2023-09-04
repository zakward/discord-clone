import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

function getFormNotValidMessage() {
  return "Username should be between 3 and 12 characters.  \n Password should be between 6 and 12 character. \n  Correct e-mail should be provided.";
}

function getFormValidMessage() {
  return "Press to Register!";
}

function RegisterPageFooter({ handleRegister, isFormValid }) {
  const history = useNavigate();

  function handlePushToLoginPage(event) {
    history("/login");
  }

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
}

export default RegisterPageFooter;
