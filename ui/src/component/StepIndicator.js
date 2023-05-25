import { Grid, Icon } from "semantic-ui-react";
import '../style/style.css'
const StepIndicator = (props) => {
  const steps = [1, 2, 3];

  const handlingBackgroundColor = (data) => {
    if (data === props.activeStep) {
      return "#1d98d1";
    } else if (data < props.activeStep) {
      return "#21ba45";
    }
  };
  return (
    <>
      <div className="stepIndicator">
        {steps.map((step, index) => {
          return (
            <>
              <div
                className="activeLink"
                style={{ backgroundColor: handlingBackgroundColor(index) }}
              >
                {index < props.activeStep ? (
                  <Icon className="iconcheckmark" name="check" />
                ) : (
                  index + 1
                )}
              </div>
              <hr />
            </>
          );
        })}
      </div>
      <Grid stackable >

            <Grid.Column style={{display:'flex', justifyContent:'space-around', marginTop:'20px'}}>
                <Grid.Column  className="textFont">Form 1</Grid.Column>
                <Grid.Column className="textFont">Form 2</Grid.Column>
                <Grid.Column className="textFont">Form 3</Grid.Column>
                </Grid.Column>
        </Grid>
    </>
  );
};
export default StepIndicator;
