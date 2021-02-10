import React, { Component } from "react";
import "./App.css";
import User from "./User/User";
import Header from "./Header/Header";

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        image: "",
        name: "Kris Jacobs",
        phone: "(512) 123-4567",
        email: "krish.lee&#64;learningcontainer.com",
        dob: "05-23-1987",
      },
      {
        id: 2,
        image: "",
        name: "Lucas Morris",
        phone: "(512) 123-8910",
        email: "racks.jacson&#64;learningcontainer.com",
        dob: "07-23-1990",
      },
      {
        id: 3,
        image: "",
        name: "Sandy Ruedell",
        phone: "(512) 123-1112",
        email: "joe.jacson@learningcontainer.com",
        dob: "07-23-2000",
      },
    ],
    search: "",
  };

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 30) });
  };

  render() {
    console.log("this", this);
    let filteredUsers = this.state.users.filter((users) => {
      return (
        users.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div className="App">
        <nav className="Nav">
          <p className="NavTitle">Employee Directory</p>
          <p className="NavInstructions">
            Click on carrots to filter by heading, or use the search box to
            narrow your results.
          </p>
        </nav>

        <input
          type="text"
          placeholder="Search name"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        <Header />
        {filteredUsers.map((user) => {
          return (
            <User
              image={user.image}
              name={user.name}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={user.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
