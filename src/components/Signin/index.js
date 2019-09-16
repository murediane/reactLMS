import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

import '../../assets/styles/components/auth.css';
import '../../assets/styles/components/index.css';
import confirmImg from '../../assets/icons/confirm.png';
import lockImg from '../../assets/icons/lock.png';
import emailImg from '../../assets/icons/email.png';
import Header from '../Header';
import { login } from '../../store/actions/auth.actions';

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newLogin: {
        email: '',
        password: ''
      }
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState(state => {
      const { newLogin } = state;
      const updated = { ...newLogin, [name]: value };
      return { ...state, newLogin: updated };
    });
  };

  handleSignin = e => {
    e.preventDefault();
    const { onLogin } = this.props;
    const { newLogin } = this.state;
    onLogin(newLogin);
  };

  render() {
    const { authReducer: { isAuthenticated }, history } = this.props;
    if (isAuthenticated) {
      history.push('/inbox');
      toast.success('Signin success!');
    }
    return (
      <>
        <Header />
        <div style={{ clear: "both" }} />
        <section className="modal" id="new-order">
          <p className="modal-header">Welcome back to our platform! SignIn</p>
          <p className="modal-header" />
          <form onSubmit={this.handleSignin} className="modal-body">
            <div className="input-group">
              <div className="input-group-addon">
                <img src={emailImg} alt="" />
              </div>
              <input name="email" id="loginEmail" className="modal-form-control" placeholder="Email" onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="input-group">
              <div className="input-group-addon">
                <img src={lockImg} alt="Lock" />
              </div>
              <input name="password" id="loginPassword" className="modal-form-control" placeholder="Password" type="password" onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="submit-wrap">
              <button type="submit" className="submit-btn" href="../user/index.html">
                <img className="fab-icon" src={confirmImg} alt="logo" />
                <p>login</p>
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
  onLogin: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
