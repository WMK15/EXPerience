import { Container, ProgressBar } from "react-bootstrap";

export const Progress = ({ value }) => {
  <Container style={{ height: "100%" }}>
    <ProgressBar now={value} />
  </Container>;
};
