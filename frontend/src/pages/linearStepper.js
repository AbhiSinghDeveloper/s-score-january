import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Profile from "./Profile";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { Box } from "@material-ui/core";
// import { Input } from "@mui/material";
import ScoreA from "../component/ScoreA";
import ScoreB from "../component/ScoreB";
import ScoreC from "../component/ScoreC";
import Declaration from "../component/Declaration";
// import InputAdornment from "@mui/material/InputAdornment";
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));
function getSteps() {
  return [
    "Profile",
    "Score A",
    "Score B",
    "Score C",
    "Preview and Submit",
    "S Score",
  ];
}

function getStepContent(step) {
 switch (step) {
    case 0:
      return <Profile />;

    case 1:
      return <ScoreA />;
   
    case 2:
  
        return <ScoreB />;
    case 3:
  
          return <ScoreC />;

    default :
      return "work";
  }
}
const LinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };

  return (
    <Typography>
      <div>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  align="center"
                  style={{ display: "block" }}
                >
                  optional
                </Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
        ) : (
          <>
            <form>{getStepContent(activeStep)}</form>
            <Button
              className={classes.button}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              back
            </Button>
            {/* {isStepOptional(activeStep) && (
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSkip}
              >
                skip
              </Button>
            )} */}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Submit & Proceed"}
            </Button>
          </>
        )}
      </div>
    </Typography>
    
  );
};
export default LinearStepper;
