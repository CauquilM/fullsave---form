// import { Formik, Field, Form } from "formik";
import React, { useContext } from "react";
import { AuthentificationContext } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = (): JSX.Element => {
  document.title = "Portex";
  const { isConnected, setIsConnected } = useContext(AuthentificationContext);

  const navigate = useNavigate();

  // interface Values {
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  // }

  const connect = () => {
    setIsConnected(!isConnected);
    navigate("/");
  };

  return (
    <div>
      <h1>Signup</h1>
      {isConnected ? <p>True</p> : <p>False</p>}
      <p></p>
      {/* <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={() => {
          setTimeout(() => {
            
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik> */}
      <button onClick={connect}>Click</button>
    </div>
  );
};

export default Login;
