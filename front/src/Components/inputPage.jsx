import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class input extends Component {
  state = {
    name: "",
    startDate: new Date(),
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/add", {
        name: this.state.name,
        date: this.state.startDate,
      })
      .then((response) => {
        if (response.status == 200) {
          alert("User added !!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form>
          <label>Enter Name </label>
          <input
            id="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <br />
          <br />
          <label>Date of Birth </label>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDateChange}
          />
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default input;
