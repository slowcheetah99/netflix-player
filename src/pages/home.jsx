import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { AccordionContainer } from "../containers/accordion";
import { HeaderContainer } from "../containers/header";
import { OptForm, Feature } from "../components";
import { motion } from "framer-motion";
import { fadeOut } from "../constants/framerVariants";
export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeOut}
    >
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programs and more</Feature.Title>
          <Feature.SubTitle>Watch anywhere, cancel anytime</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email or restart your membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </motion.div>
  );
}
