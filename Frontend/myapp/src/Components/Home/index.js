import { Component } from "react";

import Header from "../Header";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <img
          src="https://img.freepik.com/free-photo/beautiful-view-green-fields-sunrise-captured-canggu-bali_181624-14146.jpg"
          className="home-image"
        />
      </div>
    );
  }
}

export default Home;
