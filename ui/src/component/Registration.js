import React, { useState } from "react";
import {Button, Form} from 'semantic-ui-react'
import "../style/style.css";
import StepIndicator from "./StepIndicator";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function getSteps() {
  return ["Form 1", "Form 2", "Form 3"];
}

export const Registration = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [init, setInit] = useState(false);
  const [evolve, setEvolve] = useState(false);
  const [finish, setFinish] = useState(false);
  const steps = getSteps();
  const Init = (init) => {
    setInit(init);
    if (init) {
      setActiveStep(activeStep + 1);
    }
  };

  const evolveTenant = (evolveTenant) => {
    setEvolve(evolveTenant);
    if (evolveTenant) {
      setActiveStep(activeStep + 1);
    }
  };

  const finishTenant = (finishTenant) => {
    setFinish(finishTenant);
    if (finishTenant) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Step1 init={Init} />;
      case 1:
        return (
          <Step2
            evolveTenant={evolveTenant}
            handleBack={handleBack}
            tenantId={init}
          />
        );
      case 2:
        return (
          <Step3
            finishTenant={finishTenant}
            evolveResponse={evolve}
            handleBack={handleBack}
          />
        );
      default:
        return "unknown step";
    }
  }

  return (
    <div>
      <div className="Paper">
        <StepIndicator activeStep={activeStep} />
        {activeStep === steps.length ? (
          <div className="stepperTopMargin">
            <div className="FinalSteps">
              <h2>3 steps of Registration is completed.</h2>
               <h3>successfully</h3>
              <div>
              </div>
              <br/>
            </div>
          </div>
        ) : (
          <>
            <Form>{getStepContent(activeStep)}</Form>
          </>
        )}
      </div>
    </div>
  );
};