import faqs from "../fixtures/faqs.json";
import { Accordion, OptForm } from "../components";
export function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqs.map((faq) => (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>{faq.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
