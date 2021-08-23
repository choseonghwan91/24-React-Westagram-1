import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pwd: '',
      validation: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validation();

    // back-end data
    // await submitApi.post();
    this.setState({
      id: '',
      pwd: '',
    });
  };

  // handleValidate, validation - 유효성 검사는 따로해서 상태 값을 변경.
  validation = () => {
    const { id, pwd } = this.state;
    this.setState({ validation: id.includes('@') && pwd.length >= 5 });
  };
  render() {
    return (
      <div className="login">
        <div className="login-container">
          <h2 className="westagram-logo">westagram </h2>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              type="email"
              className="login-input"
              name="id"
              value={this.state.id}
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
              aria-label="이메일"
            />
            <input
              type="password"
              className="login-input"
              name="pwd"
              value={this.state.pwd}
              placeholder="비밀번호"
              autoComplete="off"
              aria-label="비밀번호"
              onChange={this.handleInput}
            />
            <button
              type="submit"
              className={
                this.state.validation ? 'login-btn--active' : 'login-btn'
              }
            >
              로그인
            </button>
          </form>
          <p className="singUp">
            <span>비밀번호 찾기</span> / <a href="/signup">가입하기</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
