import { Button, Form, Grid, Segment } from "semantic-ui-react"
import { useState } from "react";

const Step2 = (props)=>{
  const [fName, setFName] = useState("");
  const [fNameError, setFNameError] = useState(" ");
  const [lName, setLName] = useState("");
  const [lNameError, setLNameError] = useState(" ");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(" ");
  const [nextClicked, setNextClicked] = useState(false);


  const FnameReg = /^[a-zA-Z]{2,}$/;
  const FfNameHandler = (event) => {
    const enteredFName = event.target.value;
    setFName(enteredFName);
    if (!FnameReg.test(enteredFName)) {
      setFNameError('Only alphabets is allowed. Space is not allowed')
      if (enteredFName.length <2 ) {
        setFNameError('entered value length must be greater than 2')
      }
    }else if (enteredFName.length > 50 ) {
      setFNameError('Input length must be less than 50 character.')
    }else{
      setFNameError('')
    }
  };

  const regExp=/^[a-zA-Z]{2,}$/;
  const lNameHandler = (event) => {
    const enteredLName = event.target.value;
    setLName(enteredLName);
    if  (!regExp.test(enteredLName)) {
      setLNameError('Only alphabets is allowed. Space is not allowed')
      if (enteredLName.length <2 ) {
        setLNameError('entered value length must be greater than 2')
      }
    }
    else if (enteredLName.length >50) {
      setLNameError('Entered input exceeds maximum length')
    }else{
      setLNameError('')
    }
  };

  const AddRegex =/^[a-zA-Z0-9\s,'-]{10,}$/;

  const AddressHandle = (event) => {
    const enteredAdd = event.target.value;
    setAddress(enteredAdd);
    if (!AddRegex.test(enteredAdd)) {
      setAddressError('please checked entered value. only a-z, A-Z and 0-9 and - allowed and length must be greater than 10');
      
    } else {
      setAddressError(" ");
    }
  };

  const step22 = (event) => {
    event.preventDefault();
    props.evolveTenant(true)
    
  };

  const step2error = (event) => {
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
                  <strong className="segmentHeading">Please fill the below Details </strong>
                </Segment>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} />
              <Grid.Column width={4}>
                <Form.Field width={16} >
                  <label>First Name<span style={{color:'red'}}>*</span></label>
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={6}>
                <input required placeholder='First Name' type="text" value={fName} error={fName ==="" && nextClicked}  onChange={FfNameHandler}/>
                <div style={{color:'red'}}>{fNameError}</div>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} />
              <Grid.Column width={4}>
                <Form.Field width={16} >
                  <label>Last Name</label>
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={6}>
                <input placeholder='Last Name' type="text" value={lName} error={lName ==="" && nextClicked}  onChange={lNameHandler}/>
                <div style={{color:'red'}}>{lNameError}</div>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} />
              <Grid.Column width={4}>
                <Form.Field width={16}>
                  <label >Address<span style={{color:'red'}}>*</span></label>
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={6}>
                <input required placeholder='Address' value={address} onChange={AddressHandle} error={address==="" && nextClicked} />
                <div style={{color:'red'}}> {addressError}</div>
              </Grid.Column>
              
          </Grid.Row>
          {/* <Grid.Row>
            <Grid.Column width={5} />
              <Grid.Column width={6}>
                <Checkbox required value={checked} error={!checked && nextClicked} onChange={()=> setChecked(!checked)} label='I agree to the Terms and Conditions' />
                <div style={{color:'red'}}> {checkedError}</div>
              </Grid.Column>
          </Grid.Row> */}
          <Grid.Row>
            <Grid.Column width={4} />
            <Grid.Column width={4} >
              <Button onClick={props.handleBack} >Back</Button>
            </Grid.Column>
            <Grid.Column width={6}>
              <Button primary onClick={fName && address ? step22 : step2error}>Submit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Form>
  </>)
}
export default Step2