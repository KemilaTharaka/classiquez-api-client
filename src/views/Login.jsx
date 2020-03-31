import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";


class Login extends Component {
    render() {
        return (
<div className="content">
    <Grid fluid> 
        <Row>   
        <Col md={8}>
              <Card
                title=" Login"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "User Name",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "  User Name",
                         
                        }
                       
                      ]}
                    />
                <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Password",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: " Password",
                          defaultValue:""
                           
                        },
                       
                      ]}
                    />
                     <Row>
                    
                     <Col md={3}>
                     
                     </Col>
                     <Col md={3}>
                     <div className="clearfix" >
                     <Button bsStyle="info" pullRight fill type="submit">
                         Login
                      </Button>
                      </div>
                     </Col>
                      <Col md={3}>
                     
                      </Col>
                      <Col md={3}>
                     
                     </Col>
                    </Row>
                  <Row>
                  <Col md={12}>
                  <Button class="" pullRight fill type="submit" bsStyle="info">
                      Register Now
                  </Button>
                  </Col>
                  </Row>
                  
                  </form>
                }
              />
               </Col>
            <Col md={4}>
           
            </Col>
        </Row>
    </Grid>
</div>
        );
    }
}
export default Login;