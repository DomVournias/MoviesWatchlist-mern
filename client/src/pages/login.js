import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authAction";

import {
  Container,
  Form,
  Header,
  Input,
  InputWrap,
  Label,
  Section,
} from "../styles/Authentication.styled";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Destructuring data
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { alert } = useSelector((state) => state);

  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (auth.token) navigate("/");
    }, 1000);
  }, [auth.token, navigate]);

  // Login function
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  const loading = null;
  const error = null;

  console.log(auth);
  return (
    <Container>
      <Header>
        <h2>Login</h2>
        <p>Login to your profile</p>
      </Header>
      <Section>
        <Form onSubmit={onSubmit}>
          <InputWrap>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder=" " // Important Space for the floating animation
              onChange={onChange}
            />
            <Label htmlFor="email">
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
          <div>
            <button disabled={formData.email === "" || loading} type="submit">
              Submit
            </button>
            {error && <span>{error.message}</span>}
          </div>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
