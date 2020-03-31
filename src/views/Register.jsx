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

class Registor extends Component {
    render() {
        return (
<div className="content">
    <Grid fluid> 
        <Row>   
        <Col md={8}>
              <Card
                title="Registor "
                content={
                  <form>
                  
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: ""
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: ""
                        }
                      ]}
                    />
                    
                     <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "  Email",
                         
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
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Confirm Password",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: " Confirm Password",
                          defaultValue:""
                           
                        },
                       
                      ]}
                    />
               
                     <Row>
                      <Col md={12}>
                   
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                       Register
                    </Button>
                    <div className="clearfix" />
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
export default Registor;
