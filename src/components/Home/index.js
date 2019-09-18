import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../assets/styles/components/index.css";
import "../../assets/styles/components/auth.css";
import Header from "../Header";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      authReducer: { currentUser }
    } = this.props;
    let message;
    if (currentUser) {
      message = (
        <>
          <h1>
            Welcome, ${currentUser.firstname} ${currentUser.lastname}
          </h1>
          <Link style={{ color: "golden" }} to="/inbox">
            <h2>Click to access your Inbox</h2>
          </Link>
        </>
      );
    } else {
      message = <h1>Connect to your family and friend via EPIC mail .</h1>;
    }
    return (
      <>
        <Header />
        <main className="main">
          <section className="index-banner">
            <div className="vertical-center">{message}</div>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = ({ authReducer }) => ({ authReducer });

export default connect(mapStateToProps)(Home);
