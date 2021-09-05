import React, { useState } from "react";
import "./index.css";
import FormSubmit from "./FormSubmit";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
        {!isSubmitted ? (
          <FormSubmit submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
    </>
  );
};

export default Form;





