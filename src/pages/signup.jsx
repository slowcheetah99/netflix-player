import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { Form } from "../components";
import { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { UserContext } from "../context/userContext";
import { motion } from "framer-motion";
import { fadeOut } from "../constants/framerVariants";
export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const { setProfile } = useContext(UserContext);

  //validation
  const isInvalid =
    (firstName === "") | (emailAddress === "") | (password === "");
  const handleSignUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            const user = firebase.auth().currentUser;
            setProfile({
              displayName: user.displayName,
              photoURL: user.photoURL,
            });
            setEmailAddress("");
            setPassword("");
            setError("");
            navigate(ROUTES.BROWSE);
          });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeOut}
    >
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.ErrorMsg>{error}</Form.ErrorMsg>}
          <Form.Base onSubmit={handleSignUp}>
            <Form.Item>
              <Form.Label htmlFor="fName">First Name</Form.Label>
              <Form.Input
                type="text"
                placeholder="First name..."
                id="fName"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Input
                type="email"
                placeholder="Email address..."
                id="email"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Input
                type="password"
                placeholder="Password..."
                id="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </Form.Item>
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already have an account?{" "}
              <Form.Link to="/signin">Sign in!</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This form is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </motion.div>
  );
}
