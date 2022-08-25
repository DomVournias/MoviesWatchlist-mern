import axios from "axios";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/Provider";
import {
  Container,
  Form,
  Header,
  Input,
  InputWrap,
  Label,
  Section,
} from "../styles/Authentication.styled";

const Register = () => {
  const authState = useContext(GlobalContext);
  console.log(authState);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/register/", {
      username,
      email,
      password,
    });
  };

  return (
    <Container>
      <Header>
        <h2>Register</h2>
        <p>Create an account</p>
      </Header>
      <Section>
        <Form onSubmit={onSubmit}>
          <InputWrap>
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder=" "
              onChange={onChange}
            />
            <Label htmlFor="name">
              <span>Username</span>
            </Label>
          </InputWrap>
          <InputWrap>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder=" "
              onChange={onChange}
            />
            <Label htmlFor="Email">
              <span>Email</span>
            </Label>
          </InputWrap>
          <InputWrap>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder=" "
              onChange={onChange}
            />
            <Label htmlFor="password">
              <span>Password</span>
            </Label>
          </InputWrap>
          <InputWrap>
            <Input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder=" "
              onChange={onChange}
            />
            <Label htmlFor="password2">
              <span>Confirm Password</span>
            </Label>
          </InputWrap>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Section>
    </Container>
  );
};

export default Register;
