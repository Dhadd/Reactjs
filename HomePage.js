import React, { Component } from "react";
import "./homePage.css";
import axios from "axios";
import Card from "./Card";
import Dropdown from "./Dropdown";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: [],
    };
  }
  componentDidMount() {
    axios.get("https://assessment-edvora.herokuapp.com").then((response) => {
      this.setState(
        {
          data: response.data,
        },
        function () {
          this.setState({
            isLoading: false,
          });
        }
      );
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <>
        <div className="homeContainer">
          <div className="homeContent">
            <div className="leftSectionVerticalNavigationBar">
              <div className="leftSectionContent">
                <h2 className="heading">Filters</h2>
                <hr />
                {this.state.isLoading ? (
                  <p>Loading....</p>
                ) : (
                  <Dropdown dropdowndata={this.state.data} />
                )}

                <br />
                <br />
              </div>
            </div>
            <div className="rightSectionMainContent">
              <h1
                style={{
                  fontSize: "50px",
                  color: "white",
                  opacity: "0.5",
                  marginBottom: "10px",
                }}
              >
                Edvora
              </h1>
              <h2
                style={{
                  fontSize: "25",
                  color: "white",
                  opacity: "0.8",
                  fontWeight: "400",
                }}
              >
                {" "}
                Products
              </h2>
              <h2
                style={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "20px",
                }}
              >
                Product Name
              </h2>
              <hr style={{ background: "rgba(0, 0, 0, 0.822)" }} />
              <div className="cardSection">
                <div className="cardSectionBackground">
                  <Card cardData={this.state.data}/>
                </div>
                Product Name
                <div className="cardSectionBackground">
                  <Card cardData={this.state.data}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;

// {this.state.data.map((card) => (

//   ))}
