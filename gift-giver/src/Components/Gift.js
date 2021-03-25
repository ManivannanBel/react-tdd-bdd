import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";

export default class Gift extends Component {
  constructor() {
    super();

    this.state = { person: "", present: "" };
  }

  render() {
    return (
      <div className="gift">
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              className="person-input"
              type="text"
              value={this.person}
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              className="present-input"
              type="text"
              value={this.present}
              onChange={event => this.setState({ present: event.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove gift
        </Button>
      </div>
    );
  }
}
