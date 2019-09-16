import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/components/auth.css';
import '../../assets/styles/components/index.css';
import { toast } from 'react-toastify';

import confirmImg from '../../assets/icons/confirm.png';
import Header from '../Header';
import { signup } from '../../store/actions/auth.actions';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSignup: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState(state => {
      const { newSignup } = state;
      const updated = { ...newSignup, [name]: value };
      return { ...state, newSignup: updated };
    });
  };

  handleSignup = e => {
    e.preventDefault();
    const { onSignup } = this.props;
    const { newSignup } = this.state;
    if (newSignup.password !== newSignup.confirmPassword) {
      toast.error("Password and Confirmation must match");
    } else {
      onSignup(newSignup);
    }
  };

  render() {
    const { authReducer: { isAuthenticated }, history } = this.props;
    if (isAuthenticated) {
      history.push('/inbox');
      toast.success('Signup success!');
    }
    return (
      <>
        <Header />
        <div style={{ clear: "both" }} />
        <section className="modal" id="new-order">
          <p className="modal-header">Are you a new on our platform? SignUp</p>
          <form onSubmit={this.handleSignup} className="modal-body">
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/employee.png" alt="" />
              </div>
              <input id="firstName" name="firstName" className="modal-form-control" placeholder="First name" onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/employee.png" alt="" />
              </div>
              <input id="lastName" name="lastName" className="modal-form-control" placeholder="last name" onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/email.png" alt="" />
              </div>
              <input id="email" name="email" className="modal-form-control" placeholder="Email" onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/call.png" alt="" />
              </div>
              <input id="phoneNumber" name="phoneNumber" className="modal-form-control" placeholder="Phone number" onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/lock.png" alt="" />
              </div>
              <input id="password" name="password" className="modal-form-control" type="password" placeholder="Password" onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src="../../assets/icons/lock.png" alt="" />
              </div>
              <input id="confirmPassword" name="confirmPassword" className="modal-form-control" type="password" placeholder="Confirm password" onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="submit-wrap">
              <button type="submit" className="submit-btn" href="../user/index.html">
                <img className="fab-icon" src={confirmImg} alt="confirm" />
                <p>submit</p>
              </button>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export const mapStateToProps = ({ authReducer }) => ({ authReducer });
export const mapDispatchToProps = dispatch => ({
  onSignup: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
