import React, { Component } from 'react';

import '../../assets/styles/components/auth.css';
import '../../assets/styles/components/index.css';
import confirmImg from '../../assets/icons/confirm.png';
import lockImg from '../../assets/icons/lock.png';
import emailImg from '../../assets/icons/email.png';
import Header from '../Header';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div style={{ clear: "both" }} />
        <section className="modal" id="new-order">
          <p className="modal-header">Welcome back to our platform! SignIn</p>
          <p className="modal-header" />
          <form className="modal-body">
            <div className="input-group">
              <div className="input-group-addon">
                <img src={emailImg} alt="" />
              </div>
              <input name="email" className="modal-form-control" placeholder="Email" />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src={lockImg} alt="Lock" />
              </div>
              <input name="password" className="modal-form-control" placeholder="Password" />
            </div>
            <div className="submit-wrap">
              <button type="submit" className="submit-btn" href="../user/index.html">
                <img className="fab-icon" src={confirmImg} alt="logo" />
                <p>login</p>
              </button>
            </div>

            <span>
              <a className="local" href="resetpassword.html"> reset password </a>
            </span>
          </form>
        </section>
      </>
    );
  }
}

export default Signin;
