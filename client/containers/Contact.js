import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Wrapper = styled.div`
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  font-family: ${props => props.theme.font};
  padding: 0 0 60px 0;
`;

const Content = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 0 0;
  background: hsl(0, 0%, 95%);
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, 0.1);
`;

const Heading = styled.h2`
  color: hsl(0, 0%, 15%);
  font-size: 25px;
  font-weight: bold;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0 0 0;
`;

const Input = styled.input`
  font-family: ${props => props.theme.font};
  font-size: 20px;
  margin: 0 0 0 10px;
  border-width: 0 0 1px 0;
  border-color: hsl(0, 0%, 70%);
  border-style: solid;
  background: none;
  min-height: 30px;
  min-width: 100%;
  color: ${props => (props.status === false ? "red" : "black")};
`;

const InputWrapper = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  color: red;
  min-width: 70%;
  color: ${props => (props.status === false ? "red" : "black")};
`;

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      nameStatus: null,
      emailStatus: null,
      messageStatus: null
    };
  }

  handleName = val => {
    const { name } = this.state;
    if (val.length >= 70) {
      return;
    } else {
      this.setState({
        name: val
      });
    }
  };

  handleEmail = val => {
    const { email } = this.state;
    if (val === "") {
      this.setState({
        emailStatus: null
      });
    }
    this.setState({
      email: val
    });
  };

  validateEmail = val => {
    const { email } = this.state;
    const validEmail = validateEmail(val);
    if (validEmail) {
      this.setState({
        emailStatus: true
      });
    }
    if (validEmail === false) {
      this.setState({
        emailStatus: false
      });
    }
    if (val === "") {
      this.setState({
        emailStatus: null
      });
    }
  };

  handleMessage = val => {
    const { message } = this.state;
    if (val >= 200) {
      return;
    } else {
      this.setState({
        message: val
      });
    }
  };

  openMailTo = () => {
    window.location.href = "mailto:tptrinca@example.org";
  }

  render() {
    const { name, email, message, emailStatus } = this.state;
    return (
      <Wrapper>
        <Content>
          <Heading>
            If you'd like to get in touch, fill the form below or send me an
            email at{" "}
            <span onClick={() => this.openMailTo()}>
              tptrinca@gmail.com
            </span>
          </Heading>
          <Form>
            <InputWrapper>
              <i className="fas fa-user" />
              <Input
                onChange={event => this.handleName(event.target.value)}
                placeholder="Your name"
                type="text"
                name="name"
                value={name}
              />
            </InputWrapper>
            <InputWrapper status={emailStatus}>
              <i className="fas fa-envelope" />
              <Input
                status={emailStatus}
                onChange={event => this.handleEmail(event.target.value)}
                onBlur={event => this.validateEmail(event.target.value)}
                placeholder="Email Address"
                type="text"
                name="email"
                value={email}
              />
            </InputWrapper>
            <InputWrapper>
              <i className="fas fa-pencil-alt" />
              <Input
                onChange={event => this.handleMessage(event.target.value)}
                placeholder="Your message"
                type="text"
                name="message"
                value={message}
              />
            </InputWrapper>
            <InputWrapper>
              <Button>Submit Message</Button>
              <Button>Clear</Button>
            </InputWrapper>
          </Form>
          <InputWrapper>
            <Button>GitHub</Button>
            <Button>Twitter</Button>
            <Button>Codepen</Button>
            <Button>NPM</Button>
          </InputWrapper>
        </Content>
      </Wrapper>
    );
  }
}
