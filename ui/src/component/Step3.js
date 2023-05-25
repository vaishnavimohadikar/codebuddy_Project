
    import { Button, Checkbox, Dropdown, Form, Grid, Segment } from "semantic-ui-react"
    import { useState } from "react";
    
    const Step3 = (props)=>{

      const [nextClicked, setNextClicked] = useState(false);
      const [checked, setChecked] = useState(false);
      const [checkedError, setCheckedError] = useState('');
      const[code, setCode]= useState('')
      const [number, setNumber] = useState("");

      const [mobileNumberError, setMobileNumberError] = useState(" ");


      const countryCode =[{key:'+91', text:'+91', value:'+91'},{key:'+1', text:'+1', value:'+1'},]
    
      const mobRegex = /^[6-9]\d{9}$/;

      const mobileNumberHandler = (event) => {
        const mobileNum = event.target.value;
        if (event.target.validity.valid) {
          setNumber(mobileNum);
    
          if (!mobRegex.test(mobileNum) && mobileNum.length <= 10) {
            setMobileNumberError('Please enter valid mobile number. Only number is allowed');
          } else if (mobileNum.length > 10) {
            setMobileNumberError(<p>Mobile Number is too long</p>);
          } else {
            setMobileNumberError(" ");
          }
        } else if (mobileNum === "") {
          setNumber(mobileNum);
        }
      };
      const tenantInit = (event) => {
        event.preventDefault();
        if (!checked) {
          setCheckedError("Please accept terms & conditions")
        } else{
          props.finishTenant(true)
        }
      };
    
      const tenantIniterror = (event) => {
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
                      <strong className="segmentHeading">Please fill below Contact Details </strong>
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
                  <Grid.Column width={4}>
                    <Dropdown required error={code==='' && nextClicked} selection header='select country code' options={countryCode} value={code} onChange={(e,value)=>setCode(value.value)}/>
                    {code==='' && nextClicked && <div style={{color:'red'}}>Please select one option</div>}
                  </Grid.Column>
                  
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3} />
                  <Grid.Column width={4}>
                    <Form.Field width={16}>
                      <label >Mobile Number<span style={{color:'red'}}>*</span></label>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <input required placeholder='Mobile Number' type="tel" value={number} onChange={mobileNumberHandler} error={number==="" && nextClicked} />
                    <div style={{color:'red'}}> {mobileNumberError}</div>
                  </Grid.Column>
                  
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={5} />
                  <Grid.Column width={6}>
                    <Checkbox required value={checked} error={!checked && nextClicked} onChange={()=> setChecked(!checked)} label='I agree to the Terms and Conditions' />
                    <div style={{color:'red'}}> {checkedError}</div>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4} />
                <Grid.Column width={4} >
                  <Button onClick={props.handleBack} >Back</Button>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Button primary onClick={code && number ? tenantInit : tenantIniterror}>Submit</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Form>
      </>)
    }
    
export default Step3