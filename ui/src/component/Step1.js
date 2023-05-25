import { Button, Form, Grid, Segment } from "semantic-ui-react"
import { useState } from "react";

const Step1 = (props)=>{
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(" ");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(" ");
  const [nextClicked, setNextClicked] = useState(false);

  const regExp = /^[a-zA-Z0-9_-]+.[a-zA-Z]+@[a-zA-Z]+\.[a-zA-z]+$/;
  const emailHandler = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    if (!regExp.test(enteredEmail)) {
      setEmailError(<p> Please enter a valid Email</p>);
    } else if (enteredEmail.length > 64) {
      setEmailError(<p>Entered input exceeds maximum length</p>);
    } else {
      setEmailError(" ");
    }
  };

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const passwordValue = (event) => {
    const enteredpassword = event.target.value;
    setPassword(enteredpassword);
    if (!passwordRegex.test(enteredpassword)) {
      setPasswordError(
        <p className="error">
          {" "}
          It contain minimum 1 capital letters, 1 small letter, 1 numbers and 1 special characters. Length should be greater than 8
        </p>
      );
    } else {
      setPasswordError(" ");
    }
  };

  const submitH = (event) => {
    event.preventDefault();
    props.init(true)
  };

  const submitHError = (event) => {
    setNextClicked(true);
    };

return(
  <>  
    <Form onSubmit={(e)=>e.preventDefault()} className="appRegForm"  style={{paddingBottom:'30px'}}>
      <Grid>
        <Grid.Row />
          <Grid.Row>
            <Grid.Column width={2} />
              <Grid.Column width={12}>
                <Segment textAlign="center" >
                  <strong className="segmentHeading">Please fill the below Credentials </strong>
                </Segment>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} />
              <Grid.Column width={4}>
                <Form.Field width={16} >
                  <label>Email id<span style={{color:'red'}}>*</span></label>
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={6}>
                <input required placeholder='Email Id' type="email" value={email} error={email ==="" && nextClicked}  onChange={emailHandler}/>
                <div style={{color:'red'}}>{emailError}</div>
              </Grid.Column>
              
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} />
              <Grid.Column width={4}>
                <Form.Field width={16}>
                  <label >Password<span style={{color:'red'}}>*</span></label>
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={6}>
                <input required placeholder='Password' type="password" value={password} onChange={passwordValue} error={password==="" && nextClicked} />
                <div style={{color:'red'}}> {passwordError}</div>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4} />
            <Grid.Column width={4} >
              <Button disabled >Back</Button>
            </Grid.Column>
            <Grid.Column width={6}>
              <Button primary onClick={email && password ? submitH : submitHError}>Submit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Form>
  </>)
}
export default Step1;
