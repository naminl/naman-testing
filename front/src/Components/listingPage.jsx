import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class listing extends Component {
  state = {
    list: [],
    all: [],
    isDataInitialized: false,
  };

  async componentDidMount() {
    await axios.get("/show").then((newDataFromServer) => {
      this.setState({
        list: newDataFromServer.data,
        all: newDataFromServer.data,
        isDataInitialized: true,
      });
    });
  }

  async handleDelete(id) {
    console.log(id);
    await axios
      .get(`/delete/${id}`)
      .then((response) => {
        if (response.status == 200) {
          if (alert(`deleted successfully.....!! `)) {
          } else window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  List() {
    console.log(this.state.list[0]);
    console.log(this.state.isDataInitialized);
    if (this.state.list.length) {
      return this.state.list.map((currentuser) => {
        return (
          <div key={currentuser.user_id}>
            <li>
              {currentuser.full_name + ",     "}
              {currentuser.dob + "     ,"}
              <button onClick={() => this.handleDelete(currentuser.user_id)}>
                delete
              </button>
            </li>
          </div>
        );
      });
    } else {
      return (
        <div>
          <h2>Sorry!! No results found.</h2>
        </div>
      );
    }
  }

  sortAlphabetically = () => {
    const arrayCopy = [...this.state.all];
    arrayCopy.sort((a, b) => a.full_name.localeCompare(b.full_name));
    this.setState({ list: arrayCopy });
  };

  sortByTime = () => {
    this.setState({ list: this.state.all });
  };

  render() {
    return (
      <>
        {!this.state.isDataInitialized && <div>Initializing data...</div>}
        {this.state.isDataInitialized && (
          <div>
            <ul>{this.List()}</ul>
            <button onClick={this.sortAlphabetically}>
              Sort Alphabetically
            </button>
            <button onClick={this.sortByTime}>Sort By Time</button>
          </div>
        )}
      </>
    );
  }
}

export default listing;
