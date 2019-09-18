import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

import "../../assets/styles/inbox-contain.scss";
import fetchMessages from "../../store/actions/messages.actions";

class Inbox extends Component {
  constructor(props) {
    super(props);
    const { onFetchMessages } = props;
    onFetchMessages();
    this.state = {};
  }

  logout = () => {
    sessionStorage.clear();
    window.location = "/login";
    toast.success("Logged out successfully");
  };

  render() {
    const {
      messagesReducer: { messages }
    } = this.props;
    let inboxMsgs;
    if (messages) {
      inboxMsgs = messages.map(msg => (
        <tr>
          <td>{msg.subject}</td>
          <td>
            <a href="#">{msg.message}</a>
          </td>
          <td>{moment(msg.createdon).format("YYYY-MM-DD")}</td>
        </tr>
      ));
    } else {
      inboxMsgs = <tr>No messages yet</tr>;
    }
    return (
      <div className="Inbox__container">
        <header>
          <Link className="header-brand" to="/">
            {" "}
            EPIC mail
          </Link>
          <p
            className="header-brand"
            style={{ cursor: "pointer" }}
            onClick={() => this.logout()}
          >
            Logout
          </p>
        </header>

        <section id="profile-box">
          <div>
            <li>
              <Link to="/inbox">
                <div className="side-option highlighted">
                  <h1> inbox</h1>
                </div>
              </Link>
            </li>
          </div>
        </section>

        <section className="content">
          <div className="overview" />
          <div className="lg-card">
            <div className="lg-card-content">
              <div className="data-table">
                <table>{inboxMsgs}</table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ messagesReducer }) => ({ messagesReducer });
const mapDispatchToProps = dispatch => ({
  onFetchMessages: () => dispatch(fetchMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);
