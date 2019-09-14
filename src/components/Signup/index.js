import React, { Component } from 'react';

import '../../assets/styles/components/auth.css';
import '../../assets/styles/components/index.css';
import confirmImg from '../../assets/icons/confirm.png';
import Header from '../Header';

class Signup extends Component {
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
          <p className="modal-header">Are you a new on our platform? SignUp</p>
          <form className="modal-body">
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/employee.png" alt="" />
              </div>
              <input name="firstName" className="modal-form-control" placeholder="First name" />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/employee.png" alt="" />
              </div>
              <input name="lastName" className="modal-form-control" placeholder="last name" />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/email.png" alt="" />
              </div>
              <input name="email" className="modal-form-control" placeholder="Email" />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/call.png" alt="" />
              </div>
              <input name="phoneNumber" className="modal-form-control" placeholder="Phone number" />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/lock.png" alt="" />
              </div>
              <input name="password" className="modal-form-control" placeholder="Password" />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/lock.png" alt="" />
              </div>
              <input name="confirmPassword" className="modal-form-control" placeholder="Confirm password" />
            </div>
            <div className="submit-wrap">
              <button type="submit" className="submit-btn" href="../user/index.html">
                <img className="fab-icon" src={confirmImg} alt="confirm" />
                <p>submit</p>
              </button>
            </div>

            <span>
              {' '}
              <a className="local" href="resetpassword.html"> reset password </a>
            </span>
          </form>
        </section>
      </>
    );
  }
}

export default Signup;
