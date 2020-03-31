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

class AddFilm extends Component {
    render() {
        return (
<div className="content">
    <Grid fluid> 
        <Row>   
        <Col md={8}>
              <Card
                title="  Add Songs"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[ 
                        {
                            label: "Tittle",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Tittle",
                            defaultValue: ""
                        },
                        {
                            label: "Director Name",
                            type: "type",
                            bsClass: "form-control",
                            placeholder: "Artist Name"
                        }
                      ]}
                    />
                  
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Category",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Category",
                          defaultValue: ""
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Description",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue:""
                           
                        }
                      ]}
                    />                    
                     <Row>
                      <Col md={6}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Add Film</ControlLabel>
                          <input class="form-control" type= "file" />
                           
                        </FormGroup>
                
                      </Col>
                    </Row>
                   <Row>
                       <Col md={12}>
                            <FormGroup>
                                <Button bsStyle="info" pullRight fill type="submit">
                                     Add Films
                                </Button>
                            </FormGroup>
                       </Col>
                   </Row>
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
export default AddFilm;