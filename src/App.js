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
        name: "Andrew Novak",
        phone: "1234567890",
        email: "notarealemail@notarealsite.com",
        dob: "06-21-1991",
      },
      {
        id: 2,
        image: "",
        name: "Stephen Novak",
        phone: "123456",
        email: "randomemail@gmail.com",
        dob: "04-01-1987",
      },
      {
        id: 3,
        image: "",
        name: "Cooper Mannon",
        phone: "2354430",
        email: "fakeemail@notreal.org",
        dob: "07-08-2021",
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
            Click arrows to filter, or use the search box to narrow your
            results.
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
