import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { UserContext } from "../context/userContext";
import { HeaderContainer } from "../containers/header";
import Form from "../components/form";
import { motion } from "framer-motion";
import { fadeOut } from "../constants/framerVariants";
import * as ROUTES from "../constants/routes";
import { FooterContainer } from "../containers/footer";
export default function Signin() {
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const { setProfile } = useContext(UserContext);
  const navigate = useNavigate();

  //checker for empty inputs
  const isInvalid = (password === "") | (emailAddress === "");
  const handleSignIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        const currUser = firebase.auth().currentUser;
        setProfile({
          displayName: currUser.displayName,
          photoURL: currUser.photoURL,
        });
        setEmailAddress("");
        setPassword("");
        setError("");
        navigate(ROUTES.BROWSE);
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
          <Form.Title>Sign In</Form.Title>
          {error && <Form.ErrorMsg>{error}</Form.ErrorMsg>}
          <Form.Base onSubmit={handleSignIn}>
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
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now!</Form.Link>
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
